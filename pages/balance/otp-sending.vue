<template>
  <div class="relative min-h-screen transition-300 bg-white">
    <LayoutsHeader :title="$t('taking_money')" />
    <div class="container">
      <div class="space-y-4 mt-4">
        <p
          class="text-base font-semibold leading-[22px] text-gray-400 text-center"
        >
          {{ $t('agreement_code') }}
        </p>
        <p
          class="text-gray-400 text-sm font-medium leading-5 text-center max-w-[232px] mx-auto"
        >
          {{ PhoneSecretNumber(phoneNumber) }}{{ ' ' + $t($t('sending_otp')) }}
        </p>
        <FormOtp v-model="otpCode" v-bind="{ error }" />

        <Transition mode="out-in">
          <div :key="time">
            <p
              v-if="time !== '0:00'"
              class="text-gray-400 text-sm font-medium leading-5 text-center"
            >
              {{ time }}
            </p>
            <p
              v-else
              @click="reset()"
              class="text-blue text-sm font-medium leading-5 text-center transition-300 cursor-pointer"
            >
              <span class="icon-refresh text-base" />{{ $t('sending_again') }}
            </p>
          </div>
        </Transition>
      </div>
      <div
        class="absolute bottom-0 container pb-4 left-1/2 -translate-x-1/2 mx-auto"
      >
        <Transition mode="out-in">
          <BaseButton
            v-if="otpCode.length !== 6"
            :variant="'disabled'"
            :text="$t('moving_agreement')"
            class="w-full mt-4"
          >
            <template #suffix>
              <span class="icon-check" />
            </template>
          </BaseButton>
          <BaseButton
            v-else
            @click="show = true"
            :variant="'primary'"
            :text="$t('moving_agreement')"
            class="w-full mt-4"
          >
            <template #suffix>
              <span class="icon-check" />
            </template>
          </BaseButton>
        </Transition>
      </div>
    </div>
    <Modal :title="$t('full_information')" v-bind="{ show }" @close="close">
      <CardsInformationCheckList />
      <template #footer>
        <div class="border-t border-gray-800 w-full relative pt-3 pb-5">
          <div class="container">
            <BaseButton variant="outline" text="OK" class="w-full" />
            <div class="flex gap-2 mt-5">
              <BaseButton variant="outline" :text="$t('save')" class="w-full"
                ><template #suffix> <span class="icon-sign-in" /> </template
              ></BaseButton>
              <BaseButton variant="outline" :text="$t('share')" class="shrink-0"
                ><template #suffix> <span class="icon-share" /> </template
              ></BaseButton>
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>
<script setup lang="ts">
import { PhoneSecretNumber } from '~/utils'
import { useCountdown } from '~/composables/useCountdown'

const { time, start, reset } = useCountdown(120)
const otpCode = ref('')
const error = ref(false)
const show = ref(false)
onMounted(() => {
  start()
})
const phoneNumber = ref('+998882789696')

function close() {
  show.value = false
}
</script>
