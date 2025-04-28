<template>
  <div class="bg-white p-3 rounded-2xl">
    <div
      class="flex gap-2 items-center text-xs font-semibold py-3"
      v-for="key in 3"
      :key
    >
      <span class="size-8 shrink-0 rounded shimmer" />
      <span class="h-4 w-full rounded shimmer" />
      <span class="size-4 rounded shimmer shrink-0" />
    </div>
  </div>
</template>
