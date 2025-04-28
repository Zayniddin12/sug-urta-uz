<template>
  <div class="bg-white rounded-3xl p-5">
    <p class="text-blue-400 text-base font-bold leading-[22px] mb-4">
      {{ $t('personal_information') }}
    </p>
    <div class="flex flex-col space-y-4">
      <CardsWrapperInformation
        :title="$t('car_number')"
        :information="information?.carNumber"
      />
      <CardsWrapperInformation
        :title="$t('technician_passport')"
        :information="information?.technicianPassport"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  information: {
    carNumber: string
    technicianPassport: string
  }
}

defineProps<Props>()
</script>
