<template>
  <div>
    <div
      @click="openModal"
      :class="fullWidth ? 'w-full p-3' : 'w-[132px] p-2 h-full'"
      class="overflow-hidden rounded-2xl bg-blue-400 relative shrink-0"
    >
      <p
        :class="
          fullWidth
            ? 'text-base text-left leading-[22px]'
            : 'text-sm text-center leading-[18px]'
        "
        class="font-medium text-white select-none"
      >
        <i18n-t keypath="income">
          <template #number>
            <span class="text-blue-600"> 5% </span>
          </template>
        </i18n-t>
      </p>
      <img
        src="/images/balance.png"
        alt="balance"
        :class="
          fullWidth
            ? 'right-2 w-[140px] aspect-video -bottom-8'
            : 'left-0 w-full bottom-0'
        "
        class="absolute"
      />
    </div>
    <Modal :title="$t('link_of_referal')" v-bind="{ show }" @close="close">
      <div class="bg-gray-700 rounded-2xl p-[22px] my-6">
        <img src="/images/qr-code.png" alt="qr-code" class="size-full" />
      </div>
      <template #footer>
        <div class="border-t border-gray-800 w-full relative px-4 pt-3 pb-5">
          <BaseButton variant="outline" text="OK" class="w-full" />
        </div>
      </template>
    </Modal>
  </div>
</template>
<script setup lang="ts">
import { usePositionStore } from '@/store/position'
interface Props {
  fullWidth?: boolean
}
defineProps<Props>()
const show = ref(false)

const positionStore = usePositionStore()
function close() {
  show.value = false
}
function openModal() {
  show.value = true
  positionStore.isVisible = false
}
</script>
