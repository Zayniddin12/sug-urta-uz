<template>
  <div class="bg-white rounded-3xl p-5 my-2 w-full border-gray-800">
    <span class="h-5 rounded w-full shimmer mb-4" />

    <div class="grid grid-cols-2 gap-4 w-full">
      <div v-for="item in 2" :key="item" class="flex flex-col gap-1 w-full">
        <span class="h-[18px] rounded shimmer w-1/2" />
        <p class="h-[18px] w-full shimmer rounded" />
      </div>
    </div>
    <div
      class="px-3 py-1.5 rounded-full border border-gray-800 flex gap-2 w-[100px] h-7 mt-4"
    >
      <span class="size-4 rounded-md shimmer shrink-0" />
      <span class="h-4 w-full shimmer rounded" />
    </div>
  </div>
</template>
