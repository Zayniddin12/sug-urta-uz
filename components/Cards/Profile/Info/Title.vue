<template>
  <div class="w-full flex items-center gap-3 overflow-hidden">
    <p
      class="text-[10px] font-extrabold leading-[14px] uppercase tracking-[1px] text-gray-500 whitespace-nowrap"
    >
      {{ title }}
    </p>
    <img src="/images/line.svg" alt="line" class="w-full" />
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string
}
defineProps<Props>()
</script>
