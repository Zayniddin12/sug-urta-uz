<template>
  <div class="flex flex-col gap-1">
    <p class="text-gray-400 text-sm font-medium leading-5">{{ title }}</p>
    <p v-if="!money" class="text-black-100 text-sm font-semibold leading-5">
      {{ information }}
    </p>
    <p v-else class="text-blue text-base font-bold leading-[22px]">
      {{ information }} UZS
    </p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string
  information: string
  money: boolean
}
defineProps<Props>()
</script>
