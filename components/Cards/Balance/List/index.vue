<template>
  <div class="flex items-center justify-between py-3 cursor-pointer">
    <div class="flex items-center gap-2">
      <div
        :class="
          data?.status == 'good'
            ? 'bg-green-200 -rotate-90 text-green'
            : 'bg-red-100 text-red rotate-90'
        "
        class="flex-center size-8 rounded-xl shrink-0"
      >
        <span class="icon-arrow" />
      </div>
      <div>
        <h5 class="text-gray-400 font-semibold text-sm leading-5">
          {{ formatNumberSpace(data.cost) }} UZS
        </h5>
        <p class="text-gray-500 font-medium text-xs leading-4">
          {{ dayjs(data.date).format('DD.MM.YYYY') }}
        </p>
      </div>
    </div>

    <div
      :class="[
        { 'bg-green-300': data?.balance === 'referal_cashback' },
        { 'bg-blue-600': data?.balance === 'insurance' },
        { 'bg-blue-700': data?.balance === 'insurance_cashback' },
        { 'bg-gray-600': data?.balance === 'withdrawal' },
      ]"
      class="py-1 px-2 rounded-full"
    >
      <p class="text-[10px] font-medium leading-[14px] text-white">
        {{ data?.balance }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { formatNumberSpace } from '~/utils'
import dayjs from 'dayjs'

interface Props {
  data: {
    status: string
    cost: string
    date: string
    balance: string
  }
}
defineProps<Props>()
</script>
