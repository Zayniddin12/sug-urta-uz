<template>
  <div
    class="rounded-2xl p-4 bg-white transition-300 cursor-pointer hover:shadow-service-card active:shadow-service-card"
  >
    <div v-if="!noFooter" class="flex items-center justify-between">
      <CardsStatusDay :status="data?.status" :day="data?.left_day" />
      <p class="text-sm font-medium leading-5 text-blue">{{ data?.id }}</p>
    </div>
    <h4 class="text-base font-semibold leading-[22px] text-blue-400 my-2">
      {{ data?.title }}
    </h4>
    <div v-if="noFooter" class="flex items-center justify-between">
      <CardsStatusDay :status="data?.status" :day="data?.left_day" />
      <p class="text-sm font-medium leading-5 text-blue">{{ data?.id }}</p>
    </div>
    <div v-if="!noFooter">
      <div
        class="flex justify-between items-center border-t border-gray-900 py-2"
      >
        <div class="flex gap-1 text-green w-fit">
          <span class="icon-gift text-base" />
          <p class="text-sm font-semibold leading-5">{{ data?.bonus }} UZS</p>
        </div>
        <p class="text-base font-bold leading-[22px] text-blue-400">
          {{ data?.money }}
        </p>
      </div>
      <div
        class="flex justify-between items-center border-t border-gray-900 pt-2"
      >
        <div class="flex items-center gap-2 text-gray-400 w-fit">
          <span class="icon-calendar text-base" v-if="data?.day" />
          <p class="text-sm font-normal leading-160" v-if="data?.day">
            {{ dayjs(data?.day).format('DD.MM.YYYY') }}
          </p>
        </div>
        <div class="flex gap-2 text-gray-400 w-fit">
          <img
            :src="data?.organisation?.logo"
            class="size-5"
            v-if="data?.organisation?.logo"
          />
          <p class="text-sm font-normal leading-160">
            {{ data?.organisation?.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

interface Props {
  data: {
    id?: string
    status?: string
    left_day?: number
    day?: number
    title?: string
    money?: number
    bonus?: number
    organisation?: {
      name: string
      logo: string
    }
  }
  noFooter?: boolean
}

defineProps<Props>()
</script>
