<template>
  <NuxtLinkLocale :to="isLast ? '/purchase' : `/purchase/${data?.guid}`">
    <div
      class="bg-white border border-white py-6 px-1.5 flex-center flex-col gap-1.5 rounded-2xl hover:shadow-service-card cursor-pointer"
    >
      <img
        v-if="!isLast"
        :src="data?.img_url ?? '/images/default/data.svg'"
        alt="logo"
        class="size-12"
      />
      <div
        v-else-if="isLast"
        class="size-12 rounded-full flex-center bg-gray-700"
      >
        <span class="icon-arrow text-base text-gray-600" />
      </div>
      <Highlighter
        :search-words="[search ?? '']"
        :text-to-highlight="data?.name"
        class="text-gray-400 font-semibold text-xs leading-130 tracking-0.5 text-center line-clamp-1"
        highlight-class-name="bg-[#FFCD55] rounded"
      />
    </div>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
import Highlighter from 'vue-highlight-words'
interface Props {
  search?: string
  isLast?: boolean
  data: {
    guid: string
    name: string
    type: string
    img_url: string
    created_at: string
    updated_at: string
  }
}
defineProps<Props>()
</script>
