<template>
  <div class="flex-center flex-col">
    <img
      src="/images/default/no-data.png"
      alt="nodata"
      class="aspect-video max-w-[260px]"
    />
    <p
      class="mt-5 mb-3 text-base font-bold leading-[22px] text-center text-blue-400"
    >
      {{ title }}
    </p>
    <p class="text-gray-600 text-sm font-semibold leading-5">
      {{ description }}
    </p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string
  description: string
}
defineProps<Props>()
</script>
