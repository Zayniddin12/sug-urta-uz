<template>
  <div class="pt-5 flex flex-col divide-y divide-gray-800 pb-16">
    <div class="grid grid-cols-2 gap-1 text-sm font-medium py-2.5">
      <p class="text-gray-600 leading-5 text-left">
        {{ $t('amount') }}
      </p>
      <p class="text-blue-500 leading-4 text-right">
        {{ amount ? formatNumberSpace(amount) + 'UZS' : '-' }}
      </p>
    </div>
    <div class="grid grid-cols-2 gap-1 text-sm font-medium py-2.5">
      <p class="text-gray-600 leading-5 text-left">
        {{ $t('type') }}
      </p>
      <p
        :class="type == 'income' ? 'text-green' : 'text-red'"
        class="leading-5 text-right"
      >
        {{ type ?? '-' }}
      </p>
    </div>
    <div class="grid grid-cols-2 gap-1 text-sm font-medium py-2.5">
      <p class="text-gray-600 leading-5 text-left">
        {{ $t('id') }}
      </p>
      <p class="text-gray-400 leading-5 text-right">{{ id ?? '-' }}</p>
    </div>
    <div class="grid grid-cols-2 gap-1 text-sm font-medium py-2.5">
      <p class="text-gray-600 leading-5 text-left">
        {{ $t('source') }}
      </p>
      <p class="text-gray-400 leading-4 text-right">{{ source ?? '-' }}</p>
    </div>
    <div class="grid grid-cols-2 gap-1 text-sm font-medium py-2.5">
      <p class="text-gray-600 leading-5 text-left">
        {{ $t('client_name') }}
      </p>
      <p class="text-gray-400 leading-4 text-right">{{ client_name ?? '-' }}</p>
    </div>
    <div class="grid grid-cols-2 gap-1 text-sm font-medium py-2.5">
      <p class="text-gray-600 leading-5 text-left">
        {{ $t('time') }}
      </p>
      <p class="text-gray-400 leading-5 text-right">{{ time ?? '-' }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { formatNumberSpace } from '~/utils'
interface Props {
  amount: number
  type: string
  id: number
  source: string
  client_name: string
  time: string
}

defineProps<Props>()
</script>
