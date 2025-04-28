<template>
  <div
    ref="target"
    class="cursor-pointer relative z-30 select-none w-fit"
    @click="open = !open"
  >
    <BaseButton
      variant="langDropdown"
      :text="currentLanguage?.name ? currentLanguage.name : ''"
      from-right
      class="min-w-[112px] group relative z-30 !bg-gray-800 !border-gray-800 !rounded-full !p-2"
      mainClass="!gap-[6px] !text-xs !font-semibold !leading-4 !text-gray-400"
    >
      <template #prefix>
        <img :src="currentFlag" alt="flag" class="rounded-full" />
      </template>
      <template #suffix>
        <i
          class="icon-chevron align-middle text-gray-400 transition-300 block text-sm"
          :class="{ 'rotate-180': open }"
        />
      </template>
    </BaseButton>
    <Transition mode="out-in" name="move">
      <div
        v-if="open"
        class="flex flex-col absolute min-w-[112px] z-20 -mt-7 pt-7 bg-white border border-gray rounded-xl w-full truncate"
      >
        <div
          v-for="(lang, key) of languagesList"
          :key
          :class="{
            '!font-bold': lang.code === currentLanguage?.code,
            'border-transparent rounded-b-lg': key === languagesList.length - 1,
          }"
          class="py-1 px-2 text-sm text-gray-400 font-medium hover:bg-gray-200 transition-300 flex justify-between gap-1 items-center"
          @click="changeLocale(lang.code)"
        >
          <img :src="lang.img" alt="flag" class="rounded-full" />
          <p>{{ lang?.name }}</p>
          <span
            :class="{ '!text-primary': lang.code == currentLanguage?.code }"
            class="icon-check text-base text-transparent"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

import { useLanguageSwitcher } from '~/composables/useLanguageSwitcher'

const { changeLocale, currentLanguage, languagesList } = useLanguageSwitcher()
const open = ref(false)
const target = ref<HTMLDivElement | null>()

onClickOutside(target, () => (open.value = false))

const currentFlag = computed(() =>
  currentLanguage.value?.code == 'ru'
    ? '/images/flags/ru.svg'
    : '/images/flags/uzb.svg'
)
</script>
