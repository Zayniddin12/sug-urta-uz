<template>
  <div class="rounded-2xl bg-white p-4">
    <p class="font-semibold text-base leading-130 text-blue-400 mb-[9px]">
      {{ data?.title }}
    </p>
    <div class="flex gap-2 mb-3">
      <img :src="data?.organization?.logo" alt="logo" />
      <p class="font-normal leading-160 text-sm text-gray-400">
        {{ data?.organization?.title }}
      </p>
    </div>
    <div class="font-medium leading-150 mb-3">
      <p class="text-gray-400 text-lg">{{ data?.fee }} UZS</p>
      <p class="text-blue text-sm">Cashback: {{ data?.cashback }} UZC</p>
    </div>
    <div class="flex gap-2 items-center">
      <div
        @click="$emit('moreInfo')"
        class="size-10 shrink-0 flex-center rounded-xl bg-gray-700 transition-300 cursor-pointer active:scale-95"
      >
        <span class="icon-info text-2xl text-gray-400" />
      </div>
      <div
        class="size-10 shrink-0 flex-center rounded-xl bg-gray-700 transition-300 cursor-pointer active:scale-95"
      >
        <span
          :class="saved ? 'text-blue' : 'text-gray-400'"
          class="icon-save text-2xl"
        />
      </div>
      <BaseButton
        class="w-full"
        variant="outline-primary"
        :text="$t('using')"
        @click="emit('navigateNext')"
      >
        <template #suffix>
          <span class="icon-plus text-xl text-gray-blue block ml-2" />
        </template>
      </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  saved: boolean
  data?: {
    organization: {
      logo: string
      title: string
    }
    title: string
    cashback: number
    fee: number
  }
}
defineProps<Props>()

const emit = defineEmits(['moreInfo', 'navigateNext'])
</script>
