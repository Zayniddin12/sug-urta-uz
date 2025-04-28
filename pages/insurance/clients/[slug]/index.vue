<template>
  <div>
    <LayoutsHeader :loading="loading" :title="$t('client')" />

    <div class="container">
      <Transition mode="out-in">
        <div :key="loading">
          <CardsClientBio v-if="!loading" :data="clientBio" class="my-4" />
          <CardsClientBioLoading v-else class="my-4" />
        </div>
      </Transition>

      <div class="flex justify-between items-center mb-4">
        <p class="text-base text-blue-400 font-bold leading-[22px]">
          {{ $t('insurance_title') }}
        </p>
        <NuxtLinkLocale
          :to="`/insurance/clients/${route.params.slug}/history`"
          class="flex items-center gap-2.5 text-blue"
        >
          <p class="text-base font-semibold leading-[22px]">
            {{ $t('history_insurance') }}
          </p>
          <span class="icon-arrow text-20" />
        </NuxtLinkLocale>
      </div>
      <Transition mode="out-in">
        <div :key="loading">
          <div v-if="!loading" class="flex flex-col gap-2">
            <CardsInsurance
              v-for="(data, index) in insurances"
              :key="index"
              @click="navigateTo(`/${locale}/insurance/${data?.id}`)"
              :data="data"
              :no-footer="noFooter"
            />
          </div>
          <div v-else class="flex flex-col gap-2">
            <CardsInsuranceLoading
              v-for="item in 5"
              :key="item"
              :no-footer="noFooter"
            />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { clientBio, insurances } from '~/data/insurance'

const loading = ref(true)
const { locale } = useI18n()
const route = useRoute()

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>
