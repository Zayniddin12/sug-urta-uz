<template>
  <div
    class="container bg-white min-h-screen relative flex flex-col items-center pt-[18px] justify-between"
  >
    <img
      src="/images/loading/decTop.svg"
      alt="decoration"
      class="!size-full absolute left-1/2 -translate-x-1/2 -top-[80px] w-full"
    />
    <ClientOnly>
      <BaseLanguage />
    </ClientOnly>

    <div class="flex flex-col w-full justify-center items-center gap-4">
      <img src="/sugurta-logo.svg" alt="logo" />
      <h2 class="font-bold leading-130 text-gray-400 text-2xl">
        {{ $t('welcome') }}
      </h2>
      <p class="text-gray-400 font-medium text-sm leading-130">
        {{ $t('best_helper') }}
      </p>

      <img
        src="/images/welcome.svg"
        alt="images"
        class="size-full aspect-video"
      />
    </div>
    <div class="w-full pb-[68px]">
      <NuxtLinkLocale to="/auth/profile-info">
        <BaseButton
          variant="primary"
          class="w-full"
          :text="$t('enter_via_oneId')"
        >
          <template #prefix>
            <img src="/images/one-id.svg" alt="one-id" />
          </template>
        </BaseButton>
      </NuxtLinkLocale>
      <NuxtLinkLocale to="/auth/visitor-step">
        <p
          class="text-base font-bold text-blue-500 leading-130 text-center mt-6 cursor-pointer transition-300 hover:text-blue"
        >
          {{ $t('using_without_register') }}
        </p>
      </NuxtLinkLocale>
    </div>
  </div>
  <LayoutsLoader custom-loading />
</template>
<script setup lang="ts"></script>
