<template>
  <div>
    <LayoutsHeader :title="$t('statistics')" />
    <div class="container">
      <div class="mt-4 bg-white p-3 rounded-2xl divide-y divide-gray-800">
        <CardsStatistics
          class="mb-2"
          icon="icon-money"
          :title="$t('bought_insurance')"
          :amount="`${formatNumberSpace(23214000)} UZC`"
          :loading="loading"
        />
        <div class="grid grid-cols-2 gap-2 py-2">
          <CardsStatistics
            icon="icon-coins"
            :title="$t('bought_insurance')"
            :amount="`${formatNumberSpace(23214000)} UZC`"
            :loading="loading"
          />
          <CardsStatistics
            icon="icon-upload"
            :title="$t('bought_insurance')"
            :amount="`${formatNumberSpace(23214000)} UZC`"
            :loading="loading"
          />
        </div>
        <div class="grid grid-cols-2 gap-2 pt-2">
          <CardsStatistics
            icon="icon-users"
            :title="$t('bought_insurance')"
            :amount="`${formatNumberSpace(23214000)} UZC`"
            :loading="loading"
          />
          <CardsStatistics
            icon="icon-money"
            :title="$t('bought_insurance')"
            :amount="`${formatNumberSpace(23214000)} UZC`"
            :loading="loading"
          />
        </div>
      </div>
      <div class="bg-white p-3 rounded-2xl mt-2">
        <div class="flex justify-between items-center pb-4">
          <div class="">
            <p class="text-sm font-semibold leading-5 text-gray-600 mb-1">
              {{ $t('absolute_income') }}
            </p>
            <p class="text-gray-400 font-semibold text-base leading-[22px]">
              47 146 000 UZS
            </p>
          </div>
          <FormSelect
            v-model="year"
            :options="getProgrammesOptions"
            :placeholder="$t('choose')"
            class="z-20"
          />
        </div>
        <Transition mode="out-in">
          <div :key="loading" class="h-[160px]">
            <template v-if="!loading">
              <ClientOnly> <Chart /></ClientOnly>
            </template>
            <CommonSpinner v-else />
          </div>
        </Transition>
      </div>
      <Transition mode="out-in">
        <div :key="loading" class="mt-2">
          <CardsStatisticsType :data="statisticTypeList" v-if="!loading" />
          <CardsStatisticsTypeLoading v-else />
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { statisticTypeList } from '~/data/information'

const loading = ref(true)
const year = ref(1)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})
const getProgrammesOptions = [
  {
    name: '2024',
    id: 1,
  },
  {
    name: '2023',
    id: 2,
  },
  {
    name: '2022',
    id: 3,
  },
  {
    name: '2021',
    id: 4,
  },
  {
    name: '2020',
    id: 5,
  },
]
</script>
