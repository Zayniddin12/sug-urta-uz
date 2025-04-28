<template>
  <div class="bg-white rounded-3xl p-4">
    <p class="text-sm font-medium text-gray-400 leading-5 mb-2">
      {{ $t('enter_sum') }}
      <span class="text-yellow-200"
        >({{ $t('balance') }}: {{ formatNumberSpace(balance) }} UZS)</span
      >
    </p>
    <FormInput
      :disabled="isDisabled"
      :class="{ '!bg-gray-700': isDisabled }"
      class="rounded-xl !shadow-none"
      v-model="sum"
      :isFormat="true"
      :input-class="
        isDisabled
          ? 'text-gray-300 !px-0 !text-base !font-medium !leading-5'
          : '!text-gray-500 !px-0 !text-base !font-medium !leading-5'
      "
      :placeholder="$t('enter_sum')"
    />
    <FormCheckbox
      class="mt-4"
      infoIcon="true"
      :label="$t('full_withdrawal')"
      @change="onChange"
    />
  </div>
</template>
<script setup lang="ts">
import { formatNumberSpace } from '~/utils'

const balance = ref(720000)
const sum = ref('')

const isDisabled = ref(false)
function onChange(e: boolean) {
  if (e) {
    console.log(e)
    sum.value = balance.value
  }
}
watch(
  sum,
  () => {
    if (sum.value === balance.value) {
      isDisabled.value = true
    }
  },
  { deep: true }
)
</script>
