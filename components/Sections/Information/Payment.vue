<template>
  <div class="py-4">
    <div class="space-y-2">
      <CardsInformationBase :information="baseInformation" />
      <CardsInformationTime :information="timeInformation" />
      <CardsInformationPersonal :information="personalInformation" />
      <CardsInformationDiscount @toggleChecked="toggleCheck" />
      <CardsInformationCashback @toggleChecked="toggleCashback" />
      <CardsInformationPay :isDiscount="isDisCount" :isCashback="isCashback" />
    </div>
    <!--    <div class="bg-white p-4 rounded-3xl min-h-fit mt-4">-->
    <!--      <p class="text-blue-400 text-base font-bold leading-[22px] mb-6">-->
    <!--        {{ $t('system_of_payment') }}-->
    <!--      </p>-->
    <!--      <div class="flex flex-col gap-1">-->
    <!--        <CardsFeeType :items="paymentAplication" :loading="loading" />-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
<script setup lang="ts">
import {
  baseInformation,
  timeInformation,
  personalInformation,
} from '~/data/information'

const paymentAplication = computed(() => [
  {
    icon: '/images/payment/uzcard.svg',
    title: 'Payment System',
    discard: 10,
    id: 1,
  },
  {
    icon: '/images/payment/uzcard.svg',
    title: 'Payment System',
    discard: null,
    id: 2,
  },
])
const loading = ref(true)

const isDisCount = ref(false)
const isCashback = ref(false)
function toggleCheck(item: boolean) {
  isDisCount.value = item
}
function toggleCashback(item: boolean) {
  isCashback.value = item
}
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 300)
})
</script>
