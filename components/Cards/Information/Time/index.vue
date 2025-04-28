<template>
  <div class="bg-white rounded-3xl p-5 my-2">
    <p class="text-blue-400 text-base font-bold leading-[22px] mb-4">
      {{ $t('time_information') }}
    </p>

    <div class="grid grid-cols-2 gap-4">
      <CardsWrapperInformation
        :title="$t('starting_date')"
        :information="dayjs(information.startDate).format('DD.MM.YYYY')"
      />
      <CardsWrapperInformation
        :title="$t('ending_date')"
        :information="dayjs(information.endDate).format('DD.MM.YYYY')"
      />
    </div>
    <CardsStatus :status="'pending'" />
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'

interface Props {
  information: {
    startDate: string
    endDate: string
    status: string
  }
}
defineProps<Props>()
</script>
