<template>
  <div>
    <CardsRange v-model="step" />
    <SectionsInformationBase
      class="min-h-[calc(100vh-80px)]"
      v-if="step == ESTATE.baseInformation"
      @goBack="goBackOrHome"
      @goForward="step = ESTATE.personalInformation"
    />
    <SectionsInformationPersonal
      class="min-h-[calc(100vh-80px)]"
      v-if="step == ESTATE.personalInformation"
      @goBack="step = ESTATE.baseInformation"
      @goForward="step = ESTATE.makePay"
    />
    <SectionsInformationPayment
      class="min-h-[calc(100vh-80px)]"
      v-if="step == ESTATE.makePay"
    />
  </div>
</template>
<script lang="ts" setup>
const step = ref(1)
const router = useRouter()
enum ESTATE {
  baseInformation = 1,
  personalInformation = 2,
  makePay = 3,
}
function goBackOrHome() {
  if (window.history.length > 1) {
    router.back() // 1 qadam ortga qaytish
  } else {
    router.push('/') // Agar tarix yo'q bo‘lsa, asosiy sahifaga
  }
}
</script>
