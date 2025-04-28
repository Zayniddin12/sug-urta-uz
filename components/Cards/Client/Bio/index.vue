<template>
  <div class="bg-white p-4 rounded-2xl">
    <div class="flex items-center gap-4 mb-4">
      <img
        :src="data?.image"
        alt="profile"
        class="rounded-full size-14 shrink-0"
      />
      <p class="text-black-100 text-lg font-bold leading-6">{{ data?.name }}</p>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <div class="flex gap-1 items-center text-gray-400">
        <span class="icon-phone text-base" />
        <p class="text-xs font-semibold leading-4">
          {{ phoneNumberFormatter(data?.phoneNumber) }}
        </p>
      </div>
      <div class="flex gap-1 items-center text-gray-400">
        <span class="icon-ticket text-base" />
        <p class="text-xs font-semibold leading-4">
          {{ formatNumberSpace(data?.number) }}
        </p>
      </div>
      <div class="flex gap-1 items-center text-gray-400">
        <span class="icon-map-pin text-base" />
        <p class="text-xs font-semibold leading-4">
          {{ data?.location }}
        </p>
      </div>
      <div class="flex gap-1 items-center text-gray-400">
        <span class="icon-money text-base" />
        <p class="text-xs font-semibold leading-4">
          {{ formatNumberSpace(data?.money) }} % {{ data?.percentage }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { formatNumberSpace, phoneNumberFormatter } from '~/utils'

interface Props {
  data: {
    image: string
    name: string
    phoneNumber: string
    location: string
    money: string
    percentage: number
    number: string
  }
}
defineProps<Props>()
</script>
