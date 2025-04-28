<template>
  <div
    class="bg-white rounded-3xl p-6 flex items-center justify-between overflow-hidden relative"
  >
    <h3 class="font-bold text-20 leading-130 text-black-100">
      {{ data?.title }}
    </h3>
    <div class="!size-full max-w-[106px] absolute right-0 bottom-0">
      <img :src="data?.image" alt="img" class="!size-full z-[6] relative" />
      <div
        class="absolute left-0 size-16 border-[1.5px] bg-blue/[17%] rounded-23 border-white/[32%] backdrop-blur-custom z-1 -bottom-1/2"
      />
      <div
        class="absolute right-0 size-[55px] border-[1.5px] bg-white/[32%] rounded-23 border-white/[32%] backdrop-blur-custom z-10 -top-1/2"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  data: {
    title: string
    image: string
  }
}
defineProps<Props>()
</script>
