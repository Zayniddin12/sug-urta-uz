<template>
  <div class="relative min-h-screen transition-300 bg-white">
    <LayoutsHeader :title="$t('taking_money')" />
    <div class="container">
      <CardsInformationCheckList />
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto w-full container pb-4"
      >
        <NuxtLinkLocale to="/balance/otp-sending" class="w-full">
          <BaseButton
            variant="primary"
            :text="$t('moving_agreement')"
            class="w-full mt-4"
            @click="isPayed = true"
          >
            <template #suffix>
              <span class="icon-check" />
            </template>
          </BaseButton>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
