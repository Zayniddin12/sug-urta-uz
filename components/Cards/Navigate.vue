<template>
  <div class="p-4 bg-white rounded-3xl flex gap-2">
    <div
      @click="emit('goBack')"
      class="p-4 flex-center bg-gray-700 rounded-xl cursor-pointer transition-300"
    >
      <span class="icon-arrow text-gray-400 text-2xl rotate-180" />
    </div>
    <BaseButton
      @click="emit('goForward')"
      variant="bg-blue"
      :text="$t('calculation_nad_finding')"
      class="w-full"
    />
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['goBack', 'goForward'])
</script>
