<template>
  <div>
    <LayoutsHeader title="Avtosug‘urta" :loading="loading" />
    <div class="container">
      <Transition mode="out-in">
        <div :key="loading">
          <div v-if="!loading" class="grid grid-cols-1 gap-2 py-2">
            <CardsServiceType
              v-for="(item, key) in insuranceType?.list"
              :key="key"
              :data="item"
            />
          </div>
          <div v-else class="grid grid-cols-1 gap-2 py-2">
            <CardsServiceTypeLoading v-for="item in 10" :key="item" />
          </div>
        </div>
      </Transition>
      <BaseLoader v-if="loadingMore" class="mx-auto" />
    </div>
    <div ref="target" class="py-0.5 w-full"></div>
  </div>
</template>
<script setup lang="ts">
import { servicesType } from '~/data/service'
import { homeStore } from '~/store'
import { useIntersectionObserver } from '@vueuse/core'

const store = homeStore()
const { insuranceType } = storeToRefs(store)
const loadingMore = computed(() => store?.loading?.more)
const loading = computed(() => store?.loading?.list)

const target = ref<HTMLElement>()

let scrollNextTimeOut: ReturnType<typeof setTimeout> | undefined
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (process.client) {
    if (isIntersecting) {
      scrollNextTimeOut = setTimeout(() => {
        store.moreInsuranceTypes()
      }, 1000)
    } else {
      clearTimeout(scrollNextTimeOut)
    }
  }
})

onMounted(() => {
  store.fetchInsuranceTypes()
})
</script>
