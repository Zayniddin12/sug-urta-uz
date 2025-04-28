<template>
  <div class="bg-white p-5 rounded-3xl border-gray-800 w-full">
    <span class="h-5 rounded shimmer w-full mb-4" />
    <div class="flex flex-col gap-5 w-full">
      <div v-for="item in 3" :key="item" class="flex flex-col gap-1 w-full">
        <span class="h-[18px] rounded shimmer w-1/2" />
        <p class="h-[18px] w-full shimmer rounded" />
      </div>
      <div class="w-full grid grid-cols-2 gap-4">
        <div v-for="item in 2" :key="item" class="flex flex-col gap-1 w-full">
          <span class="h-[18px] rounded shimmer w-1/2" />
          <p class="h-[18px] w-full shimmer rounded" />
        </div>
      </div>
      <div v-for="item in 2" :key="item" class="flex flex-col gap-1 w-full">
        <span class="h-[18px] rounded shimmer w-1/2" />
        <p class="h-[18px] w-full shimmer rounded" />
      </div>
    </div>
  </div>
</template>
