<template>
  <div class="container pb-10">
    <span class="icon-arrow" />
    <span class="icon-bag" />
    <span class="icon-burger" />
    <p>buttons:</p>
    <div class="grid grid-cols-2 gap-2">
      <BaseButton variant="primary" text="primary" />
      <BaseButton variant="outline-primary" text="outline-primary" />
      <BaseButton variant="outline" text="outline" />
      <BaseButton variant="disabled" text="disabled" />
      <BaseButton variant="disabled-primary" text="disabled-primary" />
      <BaseButton variant="bg-blue" text="bg-blue" />
    </div>
    <SectionsInput />

    <p>services</p>
    <div class="grid sm:grid-cols-4 grid-cols-3 gap-2">
      <CardsService
        v-for="(item, index) in services"
        :key="index"
        :data="item"
      />
    </div>

    <p>servicces type</p>
    <div class="grid grid-cols-1 gap-2">
      fre
      <CardsServiceType
        v-for="(item, key) in servicesType"
        :key="key"
        :data="item"
      />
    </div>

    <p>servicces type card</p>
    <div class="grid grid-cols-1 gap-2">
      <CardsServiceCard
        v-for="(item, key) in servicesTypeCard"
        :key="key"
        :data="item"
      />
    </div>

    <p>wrapper title:</p>
    <CardsWrapperTitle :data="titleData" />

    <p>payment type:</p>
    <CardsFeeType :items="paymentAplication" :loading="loading" />
  </div>
</template>
<script setup lang="ts">
import {
  services,
  servicesType,
  servicesTypeCard,
  titleData,
} from '~/data/service'

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

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 300)
})
</script>
