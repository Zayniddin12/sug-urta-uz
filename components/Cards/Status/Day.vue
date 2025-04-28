<template>
  <div
    :class="
      status === 'warning'
        ? 'border-yellow-300 bg-yellow-400 text-yellow-200'
        : status === 'completed'
        ? 'bg-gray-700 border-gray-700 text-gray-400'
        : 'border-green-100 bg-green-200 text-green'
    "
    class="rounded-full p-1.5 flex items-center gap-2 size-fit border"
  >
    <span class="icon-clock-countdown text-base" />
    <p class="font-medium leading-4 text-xs text-center">
      {{ day }} {{ $t('day_left') }}
    </p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  day: number
  status: number
}
defineProps<Props>()
</script>
