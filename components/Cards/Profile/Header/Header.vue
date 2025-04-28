<template>
  <div class="w-full flex items-center gap-4">
    <img
      :src="image ?? '/images/default/avatar.png'"
      alt="user"
      class="size-14 rounded-full shrink-0"
    />
    <div>
      <p class="text-blue-400 text-base font-bold leading-[22px]">
        {{ fullName }}
      </p>
      <p class="text-base text-gray-400 leading-160 font-normal">
        {{ location }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  fullName: string
  location: string
  image: string
}
defineProps<Props>()
</script>
