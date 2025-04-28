<template>
  <div
    :class="{
      'bg-gray-700 border-gray-700 text-gray-400': status == 'pending',
      'bg-blue-100 border-blue-100 text-blue': status == 'active',
    }"
    class="px-3 py-1.5 rounded-full border flex gap-2 w-fit mt-4"
  >
    <span
      :class="status == 'pending' ? 'icon-clock-countdown' : 'icon-clock'"
      class="text-base"
    />
    <p class="text-sm text-semibold leading-4">{{ $t(computedStatus) }}</p>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  status: string
}

const props = defineProps<Props>()

const computedStatus = computed(() =>
  props.status == 'pending' ? 'time_end' : 'time_active'
)
</script>
