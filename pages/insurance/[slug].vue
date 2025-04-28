<template>
  <div>
    <LayoutsHeader
      :loading="loading"
      :title="'Ish beruvchining majburiy sug\'urtasi'"
      class="mb-4"
    />
    <div class="container space-y-2">
      <Transition mode="out-in">
        <div :key="loading">
          <CardsInformationBase
            v-if="!loading"
            :information="baseInformation"
          />
          <CardsInformationBaseLoading v-else />
          <CardsInformationTime
            v-if="!loading"
            :information="timeInformation"
          />
          <CardsInformationTimeLoading v-else />
          <CardsInformationPersonal
            v-if="!loading"
            :information="personalInformation"
          />
          <CardsInformationPersonalLoading v-else />
          <CardsInformationPayment
            class="mt-2"
            v-if="!loading"
            :information="paymentInformation"
          />
          <CardsInformationPaymentLoading class="mt-2" v-else />
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  baseInformation,
  personalInformation,
  timeInformation,
  paymentInformation,
} from '~/data/information'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>
