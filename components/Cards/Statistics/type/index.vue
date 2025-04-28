<template>
  <div class="bg-white p-3 rounded-2xl">
    <div
      class="flex gap-2 items-center text-xs font-semibold py-3"
      v-for="(item, key) in data"
      :key
    >
      <img
        :src="item.image"
        alt="type_insurance"
        class="size-8 shrink-0 aspect-video"
      />
      <p class="text-gray-400 leading-4">
        {{ item?.title }}
      </p>
      <p class="leading-5 text-gray-500">{{ item?.amount }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  data: {
    image: string
    title: string
    amount: number
  }[]
}
defineProps<Props>()
</script>
