<template>
  <div class="bg-white p-5 rounded-3xl">
    <p class="text-blue-400 text-base font-bold leading-[22px] mb-4">
      {{ $t('base_information') }}
    </p>
    <div class="flex flex-col gap-4">
      <CardsWrapperInformation
        :title="$t('insurance_type')"
        :information="information?.insurance"
      />
      <CardsWrapperInformation
        :title="$t('car_type')"
        :information="information?.car"
      />
      <CardsWrapperInformation
        :title="$t('register_location')"
        :information="information?.location"
      />
      <div class="w-full grid grid-cols-2 gap-4">
        <CardsWrapperInformation
          :title="$t('insurance_duration')"
          :information="information?.duration"
        />
        <CardsWrapperInformation
          :title="$t('number_of_driver')"
          :information="information?.numberOfDrivers"
        />
      </div>
      <CardsWrapperInformation
        :title="$t('insurance_company')"
        :information="information?.company"
      />
      <CardsWrapperInformation
        :title="$t('recover_money')"
        :information="formatNumberSpace(information?.recoveryMoney)"
        :money="true"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { formatNumberSpace } from '~/utils'

interface Props {
  information: {
    insurance: string
    car: string
    location: string
    duration: number
    numberOfDrivers: string
    company: string
    recoveryMoney: string
  }
}

defineProps<Props>()
</script>
