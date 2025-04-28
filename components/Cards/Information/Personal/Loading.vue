<template>
  <div class="bg-white rounded-3xl p-5">
    <span class="h-5 w-full rounded shimmer mb-4" />
    <div class="flex flex-col space-y-4 w-full">
      <div v-for="item in 2" :key="item" class="flex flex-col gap-1 w-full">
        <span class="h-[18px] rounded shimmer w-1/2" />
        <p class="h-[18px] w-full shimmer rounded" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
