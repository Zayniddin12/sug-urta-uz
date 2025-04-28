<template>
  <div>
    <div class="bg-white py-2 mb-4">
      <LayoutsHeader :title="'Mamatqulov Zayniddin'" />
      <div class="flex gap-2 container">
        <BaseTab
          v-model="activeTab"
          :list="clientInsuranceTypeList()"
          show-divider
          wrapper-class="w-full"
          itemClass="!w-full"
          active-class="!rounded-lg"
          active-items-class="!rounded-lg !text-blue-400"
        />
        <div
          class="size-11 rounded-xl bg-white flex-center border-[1.5px] border-gray-800 shrink-0"
          @click="noFooter = !noFooter"
        >
          <Transition mode="out-in">
            <span
              v-if="!noFooter"
              class="icon-burger text-2xl text-gray-600 shrink-0"
            />
            <span v-else class="icon-hot-dog text-2xl text-gray-600 shrink-0" />
          </Transition>
        </div>
      </div>
    </div>
    <div class="container">
      <Transition mode="out-in">
        <div :key="loading">
          <div v-if="!loading" class="flex flex-col gap-2">
            <CardsInsurance
              v-for="(data, index) in insurances"
              :key="index"
              @click="navigateTo(`/insurance/${data?.id}`)"
              :data="data"
              :no-footer="noFooter"
            />
          </div>
          <div v-else class="flex flex-col gap-2">
            <CardsInsuranceLoading
              v-for="item in 5"
              :key="item"
              :no-footer="noFooter"
            />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
definePageMeta({
  layout: 'custom',
})
import { insurances } from '~/data/insurance'
import { clientInsuranceTypeList } from '~/data'

const { locale } = useI18n()
const loading = ref(true)
const noFooter = ref(false)
const activeTab = ref('active')
const filterCard = ref(false)
const type = ref()
const search = useRouteQuery('search', '')
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})
const getProgrammesOptions = [
  {
    name: 'spark',
    id: 1,
  },
  {
    name: 'malibu',
    id: 2,
  },
  {
    name: 'colobalt',
    id: 3,
  },
  {
    name: 'damas',
    id: 4,
  },
  {
    name: 'tesla',
    id: 5,
  },
]
watch(
  search,
  () => {
    console.log(search.value)
  },
  { deep: true }
)
</script>
