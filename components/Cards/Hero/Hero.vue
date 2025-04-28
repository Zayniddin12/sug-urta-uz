<template>
  <div class="relative py-6 overflow-hidden max-w-[640px] w-full mx-auto">
    <div class="container">
      <h1
        class="max-w-[224px] text-[30px] font-bold leading-130 text-black-100 mb-3"
      >
        {{ $t('online_insurance_service') }}
      </h1>
      <p class="font-normal text-sm text-gray-400 leading-140 w-[244px]">
        {{ $t('online_insurance_service_dec') }}
      </p>
    </div>
    <img
      src="/images/hands-covering-light-bulb.png"
      alt="img"
      class="absolute -top-16 right-0 w-[287px] h-[360px]"
    />
  </div>
</template>
<script setup lang="ts"></script>
