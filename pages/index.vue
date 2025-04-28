<template>
  <div class="!bg-gray-800">
    <CardsHero />

    <div class="container">
      <FormGroup label="" class="min-h-[54px]">
        <ClientOnly>
          <FormInput
            :placeholder="$t('search')"
            v-model="search"
            containerClass="!border-gray-300 my-2"
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
      <BaseTab
        v-model="activeTab"
        :list="insuranceList()"
        show-divider
        wrapper-class="w-full"
        itemClass="!w-full"
        active-class="!rounded-lg"
        active-items-class="!rounded-lg !text-blue-400"
      />
      <Transition mode="out-in">
        <div :key="loading">
          <div v-if="!loading">
            <Transition>
              <div :key="list?.length">
                <div
                  v-if="list?.length"
                  class="grid min-w-[490px]:grid-cols-3 grid-cols-2 gap-2 pt-2 pb-6"
                >
                  <CardsService
                    v-for="(item, index) in list"
                    :key="index"
                    :data="item"
                    :search="search"
                    :is-last="index == list?.length - 1"
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

      <div class="flex h-[120px] gap-2">
        <CardsAdvertisementIncome class="h-full" />
        <CardsAdvertisementCashback class="h-full" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'custom',
})
import { insuranceList } from '~/data/index'
import { services } from '~/data/service'
import type { IDefaultResponse, IResponseInsuranceType } from '~/types/index'
const activeTab = ref('physical')
const loading = ref(true)
const list = ref<IResponseInsuranceType<any>[]>()

const search = ref('')
const isClose = ref(false)

const getData = (search?: string) => {
  loading.value = true
  useApi()
    .$get<IDefaultResponse<IResponseInsuranceType<any>[]>>(`insurance-type/`, {
      query: {
        limit: 8,
        type: activeTab.value,
        search: search,
      },
    })
    .then((res) => {
      if (res?.data?.items?.length) {
        list.value = [
          ...(res?.data?.items || []),
          {
            name: 'all',
            img_url: '',
          },
        ]
        console.log(list.value)
      } else {
        list.value = []
      }
    })
    .finally(() => {
      loading.value = false
    })
}
getData()

watch(
  search,
  () => {
    isClose.value = search.value.length
    debounce('search', () => getData(search.value))
  },
  { deep: true }
)

const clear = () => {
  search.value = ''
  // emit('search', search.value)
}
watch(services)
watch(activeTab, () => {
  getData(search.value)
})
</script>
