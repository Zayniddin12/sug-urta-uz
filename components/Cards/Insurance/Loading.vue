<template>
  <div class="rounded-2xl p-4 bg-white w-full">
    <div v-if="!noFooter" class="flex items-center justify-between">
      <div
        class="rounded-full p-1.5 flex items-center gap-2 size-fit border border-gray-900"
      >
        <span class="size-4 rounded-md shimmer" />
        <span class="h-4 rounded shimmer w-16" />
      </div>
      <span class="h-4 rounded w-10 shimmer" />
    </div>
    <span class="h-4 w-full rounded shimmer mt-2 mb-[0.5px]" />
    <span class="h-4 w-1/2 rounded shimmer mb-2" />
    <div v-if="noFooter" class="flex items-center justify-between">
      <div
        class="rounded-full p-1.5 flex items-center gap-2 size-fit border border-gray-900"
      >
        <span class="size-4 rounded-md shimmer" />
        <span class="h-4 rounded shimmer w-16" />
      </div>
      <span class="h-4 rounded w-10 shimmer" />
    </div>
    <div v-if="!noFooter">
      <div
        class="flex justify-between items-center border-t border-gray-900 py-2 w-full"
      >
        <div class="flex items-center gap-1 w-fit">
          <span class="size-4 rounded-md shimmer" />
          <span class="h-4 w-20 shimmer" />
        </div>
        <span class="h-4 w-20 shimmer rounded" />
      </div>
      <div
        class="flex justify-between items-center border-t border-gray-900 py-2 w-full"
      >
        <div class="flex items-center gap-1 w-fit">
          <span class="size-4 rounded-md shimmer" />
          <span class="h-4 w-20 shimmer" />
        </div>
        <span class="h-4 w-20 shimmer rounded" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  noFooter?: boolean
}
defineProps<Props>()
</script>
