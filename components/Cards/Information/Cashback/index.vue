<template>
  <div class="bg-white rounded-3xl transition-300 p-4">
    <FormInputRange
      v-model="isChecked"
      :label="$t('using_cashback')"
      class="w-full"
      labelClass="w-full"
    />
    <CollapseTransition>
      <div v-if="isChecked" class="pt-6">
        <p class="text-sm font-medium text-gray-400 leading-5 mb-2">
          {{ $t('enter_sum') }}
          <span class="text-yellow-200"
            >({{ $t('balance') }}: {{ balance }} UZS)</span
          >
        </p>

        <ClientOnly>
          <FormInput
            v-model="sum"
            type="number"
            class="!rounded-xl border-[1.5px] border-gray-900 shadow-none !p-0"
            inputClass="!p-3"
            :placeholder="$t('enter_sum')"
          />
        </ClientOnly>
        <FormCheckbox
          class="mt-4"
          v-model="sum"
          infoIcon="true"
          :label="$t('full_recovery')"
        />
      </div>
    </CollapseTransition>
  </div>
</template>
<script setup lang="ts">
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
import { formatNumberSpace } from '~/utils'
import { watch } from 'vue'

interface Props {
  balance: number
}

defineProps<Props>()
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
const sum = ref(false)
const disabled = ref(false)
const radioName = `k-radio-${Math.floor(Math.random() * 1000)}`
</script>
