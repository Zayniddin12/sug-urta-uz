<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="emit('update:modelValue', $event.target.checked)"
      class="sr-only peer"
      :class="labelClass"
    />
    <span
      class="w-9 relative block h-5 bg-gray-300 rounded-full peer peer-focus:ring-0 peer-focus:ring-blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:start-[1.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:top-[2.3px] after:size-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue"
    />
    <span
      class="ms-2 text-sm font-semibold text-blue-400 leading-5 select-none"
      >{{ label }}</span
    >
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
  label: string
  labelClass: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>
