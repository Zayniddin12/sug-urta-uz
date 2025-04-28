<template>
  <div class="bg-white rounded-3xl p-5">
    <p class="text-blue-400 text-base font-bold leading-[22px] mb-4">
      {{ $t('payment_information') }}
    </p>
    <div class="flex flex-col space-y-4">
      <CardsWrapperInformation
        :title="$t('type_of_payment')"
        :information="information?.paymentType"
      />
      <CardsWrapperInformation
        :title="$t('from_cashback')"
        :information="information?.cashback"
      />
      <CardsWrapperInformation
        :title="$t('date_of_payment')"
        :information="dayjs(information?.date).format('DD.MM.YYYY')"
      />

      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <p class="text-gray-400 text-sm font-medium leading-5">
            {{ $t('payed_sum') }}
          </p>
          <p class="text-base font-bold leading-[22px] text-blue">
            {{ information?.payment ?? '-' }}
          </p>
        </div>
        <div class="space-y-2">
          <p class="text-gray-400 text-sm font-medium leading-5">
            {{ $t('remained_cashback') }}
          </p>
          <p class="text-base font-bold leading-[22px] text-green">
            {{ information?.remainedCashback ?? '-' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'

interface Props {
  information: {
    paymentType: string
    cashback: string
    date: string
    payment: string
    remainedCashback: string
  }
}

defineProps<Props>()
</script>
