<template>
  <div
    :class="[
      'container fixed left-1/2 -translate-x-1/2 w-full flex justify-between bottom-0 bg-white border-t border-t-gray-800 transition-transform duration-300 h-fit',
      isVisible ? 'translate-y-0' : 'translate-y-full',
      'fixed w-full z-[9999]',
    ]"
  >
    <NuxtLinkLocale to="/">
      <div class="flex-center flex-col py-2.5 px-[4px] group cursor-pointer">
        <img
          v-if="route.name == `index___${locale}`"
          src="/images/filled-home.png"
          alt="main"
        />
        <span
          v-else
          class="icon-home text-2xl text-gray-600 group-hover:text-blue transition-300"
        />
        <p
          class="text-gray-600 text-xs mt-[6px] leading-4 font-bold text-center group-hover:text-blue transition-300"
        >
          {{ $t('main') }}
        </p>
      </div>
    </NuxtLinkLocale>

    <NuxtLinkLocale to="/balance">
      <div class="flex-center flex-col py-2.5 px-1 group cursor-pointer">
        <img
          v-if="route.name == `balance___${locale}`"
          src="/images/filled-wallet.png"
          alt="balance"
        />
        <span
          v-else
          class="icon-wallet text-2xl text-gray-600 group-hover:text-blue transition-300"
        />
        <p
          class="text-gray-600 text-xs mt-[6px] leading-4 font-bold group-hover:text-blue text-center transition-300"
        >
          {{ $t('balance') }}
        </p>
      </div>
    </NuxtLinkLocale>

    <NuxtLinkLocale to="/insurance">
      <div class="flex-center flex-col py-2.5 px-1 group cursor-pointer">
        <img
          v-if="route.name == `insurance___${locale}`"
          src="/images/filled-clipboard.png"
          alt="balance"
        />
        <span
          v-else
          class="icon-clipboard text-2xl text-gray-600 group-hover:text-blue transition-300"
        />
        <p
          class="text-gray-600 text-xs mt-[6px] leading-4 font-bold group-hover:text-blue text-center transition-300"
        >
          {{ $t('insurance') }}
        </p>
      </div>
    </NuxtLinkLocale>

    <NuxtLinkLocale to="/profile">
      <div class="flex-center flex-col py-2.5 px-1 group cursor-pointer">
        <img
          v-if="route.name == `profile___${locale}`"
          src="/images/filled-user.png"
          alt="balance"
        />
        <span
          v-else
          class="icon-user text-2xl text-gray-600 group-hover:text-blue transition-300"
        />
        <p
          class="text-gray-600 text-xs mt-[6px] font-bold group-hover:text-blue leading-4 text-center transition-300"
        >
          {{ $t('profile') }}
        </p>
      </div>
    </NuxtLinkLocale>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

import { usePositionStore } from '@/store/position'

const positionStore = usePositionStore()
const isVisible = computed(() => positionStore.isVisible)

onMounted(() => {
  window.addEventListener('scroll', positionStore.handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', positionStore.handleScroll)
})
</script>

<style>
.router-link-active p {
  @apply !text-primary;
}
</style>
