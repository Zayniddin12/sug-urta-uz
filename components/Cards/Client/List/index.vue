<template>
  <div class="bg-white rounded-2xl p-3">
    <div class="w-full flex items-center gap-4">
      <img :src="data?.image" alt="user" class="size-12 rounded-full" />
      <div class="w-full">
        <p class="text-black-100 text-lg font-semibold leading-6">
          {{ data?.fullName }}
        </p>
        <div
          class="w-full flex items-center justify-between text-sm leading-5 font-medium"
        >
          <p class="text-gray-600">
            {{ data?.location }}
          </p>
          <p class="text-blue">{{ formatNumberSpace(data?.money) }} so'm</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { formatNumberSpace } from '~/utils'

interface Props {
  data: {
    fullName: string
    location: string
    image: string
    money: number
  }
}
defineProps<Props>()
</script>
