<template>
  <div class="relative min-h-screen flex flex-col transition-300">
    <LayoutsHeader :title="$t('taking_money')" />

    <div class="flex-1 flex flex-col justify-between">
      <div class="container">
        <CardsPaymentAddingCard class="mt-4" />
        <CardsPaymentAddingSum class="mt-2" />
      </div>

      <div class="mx-auto w-full container pb-4 pt-2">
        <div class="flex items-center">
          <FormCheckbox
            infoIcon="true"
            labelStyles="!hidden"
            @change="onChange"
          />
          <i18n-t
            keypath="agreement_privacy"
            class="text-blue-400 text-sm font-medium leading-5"
          >
            <template #slug_agreement>
              <span class="text-gray-500 ml-1">
                {{ $t('slug_agreement') }}
              </span>
            </template>
          </i18n-t>
        </div>
        <NuxtLinkLocale class="w-full" to="/balance/paymentInformation">
          <BaseButton
            variant="primary"
            :text="$t('payment')"
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
