<template>
  <div class="bg-white p-4 rounded-2xl border border-gray-900">
    <div class="flex items-center gap-4 mb-4">
      <span class="rounded-full size-14 shrink-0 shimmer" />
      <span class="h-5 w-[140px] rounded shimmer" />
    </div>
    <div class="grid grid-cols-2 gap-3 w-full">
      <div class="flex gap-1 items-center w-full" v-for="item in 4" :key="item">
        <span class="size-4 rounded shimmer shrink-0" />
        <p class="h-4 w-full rounded shimmer"></p>
      </div>
    </div>
  </div>
</template>
