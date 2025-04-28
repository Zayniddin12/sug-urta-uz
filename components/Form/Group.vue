<template>
  <div class="flex flex-col gap-2">
    <p v-if="label?.length > 0" :class="labelClass" class="">
      {{ label }}
    </p>
    <slot />
    <CollapseTransition>
      <p v-if="error && errorLabel" class="text-xs leading-130 text-red-300">
        {{ $t(errorLabel) }}
      </p>
    </CollapseTransition>
  </div>
</template>

<script setup lang="ts">
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'

interface Props {
  label: string
  labelClass?: string
  error?: boolean
  errorLabel?: string
}

withDefaults(defineProps<Props>(), {
  label: 'Label',
  labelClass: '',
  errorLabel: '',
})
</script>
