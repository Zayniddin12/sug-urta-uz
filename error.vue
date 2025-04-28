<template>
  <div class="p-8 text-center">
    <h1 class="text-2xl font-bold text-red-600">
      Xatolik: {{ error.statusCode || 'Noma’lum' }}
    </h1>
    <p class="text-lg mt-4">
      {{ error.message }}
    </p>
    <pre class="mt-4 text-sm text-gray-500">
      {{ error }}
    </pre>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: Error & { statusCode?: number }
}
defineProps<Props>()
</script>
