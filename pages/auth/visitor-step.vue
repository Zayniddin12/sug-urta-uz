<template>
  <div
    class="h-screen container bg-white min-h-screen relative flex flex-col items-center pt-[18px] space-y-6 !mt-0"
  >
    <div class="px-8">
      <img
        src="/images/loading/decTop.svg"
        alt="decoration"
        class="!size-full absolute left-1/2 -translate-x-1/2 -top-[80px] w-full"
      />
    </div>
    <div class="flex flex-col space-y-6 items-center !mt-0">
      <ClientOnly>
        <BaseLanguage />
      </ClientOnly>
      <img src="/sugurta-logo.svg" alt="logo" />
    </div>
    <ClientOnly>
      <SectionsStep class="!h-full" />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts"></script>
