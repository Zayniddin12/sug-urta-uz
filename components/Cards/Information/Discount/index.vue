<template>
  <div class="bg-white rounded-3xl transition-300 cursor-pointer">
    <FormInputRange
      v-model="isChecked"
      :label="$t('using_discount')"
      class="w-full p-4"
      labelClass="w-full"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

const isChecked = ref(false)

interface Emit {
  (event: 'toggleChecked', link: boolean): void
}

const emit = defineEmits<Emit>()
watch(
  isChecked,
  () => {
    emit('toggleChecked', isChecked.value)
  },
  { immediate: true }
)
</script>
