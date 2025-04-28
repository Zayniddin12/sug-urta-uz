<template>
  <div class="size-full relative flex flex-col justify-between">
    <Swiper
      class="w-full !relative h-full"
      :modules="[Pagination, Navigation]"
      :pagination="{
        clickable: true,
      }"
      :navigation="{ nextEl: '.living-next-el', prevEl: '.living-prev-el' }"
      :spaceBetween="20"
      @slideChange="handleSlideChange"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div
          class="text-center flex flex-col items-center justify-between gap-6"
        >
          <img
            :src="slide.image"
            class="size-full aspect-video"
            alt="Slide image"
          />
          <div class="text-gray-400">
            <h2 class="text-2xl font-bold mb-4 leading-130">
              {{ $t(slide.title) }}
            </h2>
            <p class="text-sm font-medium leading-150">
              {{ $t(slide.description) }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="relative pb-[42px]">
      <div class="mt-6 w-full">
        <BaseButton
          v-if="!isLastSlide"
          aria-label="next button"
          :text="$t('next')"
          variant="primary"
          class="living-next-el w-full py-3 bg-blue-500 text-white rounded-lg font-medium"
        >
          <template #suffix>
            <span class="icon-arrow" />
          </template>
        </BaseButton>
        <NuxtLinkLocale v-else to="/">
          <BaseButton
            aria-label="next button"
            :text="$t('start')"
            variant="primary"
            class="living-next-el w-full py-3 bg-blue-500 text-white rounded-lg font-medium"
          >
            <template #suffix>
              <span class="icon-arrow" />
            </template>
          </BaseButton>
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/">
          <p
            class="text-base font-bold text-blue-500 mt-6 cursor-pointer hover:underline text-center transition-300"
          >
            {{ $t('skip') }}
          </p>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  {
    image: '/images/step-1.svg',
    title: 'cashback_for_insurance',
    description: 'cashback_for_insurance_dec',
  },
  {
    image: '/images/step-2.svg',
    title: 'invention_and_income',
    description: 'invention_and_income_dec',
  },
  {
    image: '/images/step-3.svg',
    title: 'transform_with_card',
    description: 'transform_with_card_dec',
  },
]
const isLastSlide = ref(false)

function handleSlideChange(swiper: any) {
  // Check if the current slide is the last one
  isLastSlide.value = swiper?.isEnd
}
</script>

<style>
/* Swiper pagination nuqtalari uchun style */
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #e2e8f0;
  opacity: 0.5;
  transition: background 0.3s, opacity 0.3s;
}

.swiper-pagination-bullet-active {
  background: #1e293b !important; /* Faol nuqta qoraroq */
  opacity: 1;
}
</style>
