<template>
  <div
    :class="{ '!border-red-500 !bg-red/5': error }"
    class="bg-white/[0.12] border border-white/[0.12] transition-300 focus-within:border-white/[0.40] flex flex-col items-end justify-between rounded-xl"
  >
    <textarea
      :id="id"
      :key="placeholder.length"
      v-model="inputValue"
      :class="inputClass"
      :placeholder="placeholder"
      class="w-full h-full text-sm p-3 text-white bg-transparent outline-none placeholder:text-white/40 resize-none textarea-scroll"
      v-bind="{ type, maxlength, minlength, rows }"
      @blur="$emit('blur', $event)"
      @input="handleInput"
    />
    <span v-if="maxlength" class="text-gray-100 text-xs mb-1 mr-2 mt-0.5">
      {{ inputValue.length }} / {{ maxlength }}</span
    >
  </div>
</template>

<script lang="ts" setup>
interface Props {
  inputClass?: string
  type?: string
  placeholder?: string
  error?: boolean
  id?: string
  modelValue?: string
  maxlength?: number | string
  minlength?: number | string
  rows?: number
}

const props = withDefaults(defineProps<Props>(), {
  inputClass: '',
  type: 'text',
  placeholder: '',
  maxlength: '',
  minlength: '',
})

interface Emits {
  (e: 'blur', v: Event): void

  (e: 'update:modelValue', v: string): void
}

const $emit = defineEmits<Emits>()

watch(
  () => props.modelValue,
  (v: any) => {
    inputValue.value = v || ''
  }
)

const inputValue = ref<string>(props.modelValue || '')

function handleInput() {
  $emit('update:modelValue', inputValue.value)
}
</script>

<style scoped>
.textarea-scroll::-webkit-scrollbar {
  width: 0;
}

.textarea-scroll::-webkit-scrollbar-track {
  background: #fff;
}

.textarea-scroll::-webkit-scrollbar-thumb {
  background: #fff;
}
</style>
