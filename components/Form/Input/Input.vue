<template>
  <div
    class="inline-flex items-center transition-300 relative bg-white rounded-full shadow-input-md focus-within:border-primary px-4 border overflow-hidden w-full"
    :class="({ '!border-red ': error }, containerClass)"
  >
    <slot name="prefix" />
    <input
      v-bind="{
        type,
        minlength,
        maxlength,
        max,
        min,
        disabled,
        placeholder,
        readonly,
        autocomplete,
      }"
      :id="inputId"
      ref="Input"
      autocomplete="off"
      v-maska="maska"
      :class="[inputClass]"
      class="w-full h-full text-sm px-3 py-2.5 text-blue-400 bg-transparent outline-none font-medium leading-5 placeholder:text-gray-500"
      :value="modelValue"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @blur="$emit('blur')"
      @focusout="$emit('focusout')"
      @focus="handleFocus"
    />
    <slot name="suffix" />
  </div>
</template>

<script setup lang="ts">
export interface Props {
  type?: string
  placeholder?: string
  modelValue: number | string
  disabled?: boolean
  error?: boolean
  focus?: boolean
  maxlength?: number
  minlength?: number
  max?: number
  min?: number
  inputClass?: string | string[]
  prefixClass?: string
  suffixClass?: string
  autocomplete?: string
  containerClass?: string
  inputId?: string
  readonly?: boolean
  maska?: string
  isFormat: boolean
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'blur'): void
  (e: 'focusout'): void
  (e: 'focus'): void
  (e: 'enter'): void
}>()

const formatSpace = (value: string) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const handleInput = (e: { target: HTMLInputElement }) => {
  let rawValue = e.target.value.replace(/\D/g, '') // faqat raqamlar

  if (props.isFormat) {
    const formattedValue = formatSpace(rawValue)
    e.target.value = formattedValue // <- input ichini ham tozalab va formatlab ber
    emit('update:modelValue', formattedValue)
  } else {
    e.target.value = e.target.value // <- input ichini faqat raqam qilsin
    emit('update:modelValue', e.target.value)
  }
}

const handleEnter = () => {
  emit('enter')
}
const Input = ref()
defineExpose({ Input })

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  maxlength: 99,
  minlength: undefined,
  max: undefined,
  min: undefined,
  inputClass: undefined,
  autocomplete: 'new-password',
})

const handleFocus = () => {
  emit('focus')
}
watch(
  () => props?.focus,
  (value) => {
    if (value) {
      Input?.value?.focus()
    }
  },
  { deep: true, immediate: true }
)
</script>

<style>
input:-webkit-autofill,
input:-webkit-autofill:focus,
input:-webkit-autofill:focus-visible,
input:-webkit-autofill:hover {
  background-color: transparent !important;
  border: none;
  border-radius: 8px !important;
  color: #040e1a !important;
  -webkit-text-fill-color: #040e1a !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  transition: background-color 5000s ease-in-out 0s;
}

input:-moz-placeholder {
  color: #040e1a !important;
}

input:-ms-input-placeholder {
  color: #040e1a !important;
}
</style>
