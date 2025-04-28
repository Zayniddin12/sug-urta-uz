<template>
  <div class="w-full">
    <FormGroup
      class="relative w-full"
      :label="label"
      label-class="!text-sm !font-medium leading-5 !text-gray-400 "
    >
      <div
        class="relative flex items-center justify-between border border-gray-900 rounded-xl bg-white"
      >
        <VueDatePicker
          v-model="selectedDate"
          class="w-full"
          model-type="dd/mm/yyyy"
          format="dd/mm/yyyy"
          :enable-time-picker="false"
          :clearable="false"
          :placeholder="placeholder"
          auto-apply
          @update:model-value="updateDate"
        />
        <span
          class="icon-calendar text-20 translate-y-[2.5px] text-gray-300 absolute top-3 right-3 bottom-3"
        />
      </div>
    </FormGroup>
  </div>
</template>

<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import VueDatePicker from '@vuepic/vue-datepicker'

interface Props {
  startValue: number | null
  isClear: boolean
  placeholder: string
  label: string
}

const props = defineProps<Props>()
const selectedDate = ref<number | null>(props?.startValue || null)

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void
}>()

function updateDate() {
  emit('update:modelValue', selectedDate.value)
}

watch(
  () => props.isClear,
  (newVal) => {
    if (newVal) {
      selectedDate.value = null
    }
  }
)
</script>

<style>
:root {
  --dp-input-icon-padding: 10px;
}
.dp__input {
  border-radius: 0;
  padding: 12px;
  width: 100%;
  background-color: transparent !important;
  border: 0 transparent !important;
  @apply: transition-300;
}
.dp__icon {
  display: none !important;
}
</style>
