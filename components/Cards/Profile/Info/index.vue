<template>
  <div>
    <p class="text-base font-normal leading-160 text-gray-400">{{ title }}</p>
    <p class="text-blue-400 text-sm leading-5 font-semibold flex gap-1">
      {{ name }}
      <span v-if="isPhone" class="icon-edit text-blue text-lg leading-5" />
    </p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string
  name: string
  isPhone: boolean
}
defineProps<Props>()
</script>
