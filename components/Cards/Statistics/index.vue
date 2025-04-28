<template>
  <div>
    <span :class="icon" class="text-blue text-2xl" />
    <p class="mt-3 mb-1 text-sm font-semibold leading-5 text-gray-600">
      {{ title }}
    </p>
    <Transition mode="out-in">
      <div :key="loading">
        <p
          v-if="!loading"
          class="text-base font-semibold leading-[22px] text-gray-400"
        >
          {{ amount }}
        </p>
        <span v-else class="h-4 w-3/4 shimmer rounded" />
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string
  amount: number | string
  icon: string
  loading: boolean
}
defineProps<Props>()
</script>
