<template>
  <NuxtLinkLocale :to="`/purchase/${route.params.slug}/type`">
    <div
      class="bg-white border border-white rounded-2xl p-3 flex-center-between hover:shadow-input-md group transition-300 cursor-pointer active:scale-95"
    >
      <div class="flex-center gap-3">
        <img
          :src="data?.insurance_icon ?? '/images/default/data.svg'"
          alt="type"
          class="sm:size-8 size-6 object-contain aspect-video"
        />
        <p class="text-sm font-semibold leading-130 text-black-100">
          {{ data?.name }}
        </p>
      </div>
      <div class="relative pl-3">
        <i
          class="icon-chevron text-sm text-gray-500 block -rotate-90 group-hover:text-primary"
        />
      </div>
    </div>
  </NuxtLinkLocale>
</template>
<script setup lang="ts">
const route = useRoute()
interface Props {
  data?: {
    guid?: string
    name?: string
    insurance_type_id?: string
    type?: string[]
    description?: string
    insurance_icon?: string
    created_at?: string
    updated_at?: string
  }
}
defineProps<Props>()
</script>
