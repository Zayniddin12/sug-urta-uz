<template>
  <div class="min-h-screen">
    <LayoutsHeader :loading="loading" :title="$t('all_insurance')" />
    <div class="container">
      <FormGroup label="">
        <ClientOnly>
          <FormInput
            class="!w-full mt-2"
            :placeholder="$t('search')"
            v-model="search"
            containerClass="!border-gray-300 mb-2"
          >
            <template #suffix>
              <span v-if="!isClose" class="icon-search text-xl text-gray-600" />
              <span
                v-else
                @click="clear"
                class="icon-close text-xl text-gray-600 transition-300 cursor-pointer hover:text-red"
              />
            </template>
          </FormInput>
        </ClientOnly>
      </FormGroup>

      <Transition mode="out-in">
        <div :key="loading">
          <div v-if="!loading">
            <Transition>
              <div :key="list?.length">
                <div
                  v-if="insurance?.list?.length"
                  class="grid grid-cols-3 gap-2 pt-2 pb-6"
                >
                  <CardsService
                    v-for="(item, index) in insurance?.list"
                    :key="index"
                    :data="item"
                    :search="search"
                  />
                </div>
                <CommonNoData
                  v-else
                  :title="$t('not_found_title')"
                  :description="$t('not_found_description')"
                  class="py-10"
                />
              </div>
            </Transition>
          </div>
          <div v-else class="grid grid-cols-3 gap-2 pt-2 pb-6">
            <CardsServiceLoading v-for="item in 9" :key="item" />
          </div>
        </div>
      </Transition>
      <BaseLoader v-if="loadingMore" class="mx-auto" />
    </div>
    <div ref="target" class="py-0.5 w-full"></div>
  </div>
</template>
<script lang="ts" setup>
import { homeStore } from '~/store/index'
import { useIntersectionObserver } from '@vueuse/core'
const search = ref('')
const isClose = ref(false)
const store = homeStore()
const { insurance } = storeToRefs(store)
const loadingMore = computed(() => store?.loading?.more)
const loading = computed(() => store?.loading?.list)
const clear = () => {
  search.value = ''
}
const target = ref<HTMLElement>()

let scrollNextTimeOut: ReturnType<typeof setTimeout> | undefined
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (process.client) {
    if (isIntersecting) {
      scrollNextTimeOut = setTimeout(() => {
        store.moreInsurance()
      }, 1000)
    } else {
      clearTimeout(scrollNextTimeOut)
    }
  }
})

watch(search, () => {
  isClose.value = search.value.length > 0
  store.insurance.pagination.page = 1
  store.insurance.params.search = search.value || undefined
  debounce('search', () => {
    store.fetchInsurances(true, false)
  })
})

onMounted(() => {
  store.fetchInsurances()
})
</script>
