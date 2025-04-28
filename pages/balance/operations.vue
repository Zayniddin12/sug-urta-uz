<template>
  <div class="bg-white min-h-screen">
    <LayoutsHeader :title="$t('balance_header_title')">
      <template #suffix>
        <div
          @click="isFilter = true"
          class="size-8 flex-center bg-gray-700 rounded-xl relative"
        >
          <span class="icon-filter text-20 text-gray-600" />
          <img
            v-if="year !== 1 || month"
            src="/images/circle-red.svg"
            alt="circle-red"
            class="absolute right-2 bottom-1"
          />
        </div>
      </template>
    </LayoutsHeader>
    <CollapseTransition>
      <div v-if="isFilter" class="py-2 flex gap-2 container">
        <FormSelect
          v-model="month"
          :options="months"
          :placeholder="$t('all_month')"
          class="z-20 w-full"
        />
        <FormSelect
          v-model="year"
          :options="getProgrammesOptions"
          :placeholder="$t('choose')"
          class="z-20 w-full"
        />
        <div class="size-12 shrink-0 bg-blue rounded-[10px] flex-center">
          <div
            class="size-[calc(48px-2px)] rounded-[10px] bg-white-overlay-blue flex items-center justify-center text-white cursor-pointer overflow-hidden shadow-blue-custom border border-white/[12%]"
          >
            <Transition mode="out-in">
              <span
                v-if="year !== 1 || month"
                class="icon-close text-white text-lg"
              />
              <span v-else class="icon-check text-white text-lg" />
            </Transition>
          </div>
        </div>
      </div>
    </CollapseTransition>
    <div class="py-2 mb-4 container">
      <div class="divide-y divide-gray-800 bg-white py-4 rounded-xl">
        <CardsBalanceList
          v-for="(item, index) in OperationList"
          :key="index"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
import { OperationList } from '~/data/balance'

const year = ref(1)
const month = ref()
const isFilter = ref(false)
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
const months = [
  {
    name: 'Yanvar',
    id: 1,
  },
  {
    name: 'Fevral',
    id: 2,
  },
  {
    name: 'Mart',
    id: 3,
  },
  {
    name: 'Aprel',
    id: 4,
  },
  {
    name: 'May',
    id: 5,
  },
  {
    name: 'Iyun',
    id: 6,
  },
  {
    name: 'Iyul',
    id: 7,
  },
  {
    name: 'Avgust',
    id: 8,
  },
  {
    name: 'Sentabr',
    id: 9,
  },
  {
    name: 'Oktabr',
    id: 10,
  },
  {
    name: 'Noyabr',
    id: 11,
  },
  {
    name: 'Dekabr',
    id: 12,
  },
]
</script>
