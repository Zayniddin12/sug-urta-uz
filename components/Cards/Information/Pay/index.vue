<template>
  <div class="bg-white p-4 rounded-3xl">
    <div
      v-if="(isDiscount && isCashback) || isDiscount"
      class="grid grid-cols-2 gap-1"
    >
      <div class="space-y-2">
        <p class="text-gray-400 text-sm font-medium leading-5">
          {{ $t('old_price') }}
        </p>
        <p class="line-through text-20 font-bold leading-7 text-gray-500">
          {{ oldPrice ?? '-' }}
        </p>
      </div>
      <div class="space-y-2">
        <p class="text-gray-400 text-sm font-medium leading-5">
          {{ $t('all_amount') }}
        </p>
        <p class="text-20 font-bold leading-7 text-blue">
          {{ allPrice ?? '-' }}
        </p>
      </div>
    </div>
    <div v-else class="grid grid-cols-2 gap-1">
      <div class="space-y-2">
        <p class="text-gray-400 text-sm font-medium leading-5">
          {{ $t('all_amount') }}
        </p>
        <p class="text-20 font-bold leading-7 text-gray-500">
          {{ allPrice ?? '-' }}
        </p>
      </div>
      <div class="space-y-2">
        <p class="text-gray-400 text-sm font-medium leading-5">
          {{ $t('cashback') }}
        </p>
        <p class="line-through text-20 font-bold leading-7 text-green">
          {{ cashBack ?? '-' }}
        </p>
      </div>
    </div>

    <div class="flex gap-2 mt-6">
      <div
        class="bg-gray-700 px-3 p-1 shrink-0 flex gap-1.5 rounded-xl items-center"
      >
        <span class="icon-simcard text-2xl text-gray-400" />
        <span class="icon-chevron text-xs text-gray-500 -rotate-90" />
      </div>
      <BaseButton
        variant="disabled"
        :text="$t('next')"
        class="w-full"
        @click="show = true"
      />
    </div>
    <Modal :title="$t('full_information')" v-bind="{ show }" @close="close">
      <CardsInformationCheckList />
      <template #footer>
        <div class="border-t border-gray-800 w-full relative px-4 pt-3 pb-5">
          <BaseButton variant="outline" text="OK" class="w-full" />
          <div class="flex gap-2 mt-5">
            <BaseButton variant="outline" :text="$t('save')" class="w-full"
              ><template #suffix> <span class="icon-sign-in" /> </template
            ></BaseButton>
            <BaseButton variant="outline" :text="$t('share')" class="shrink-0"
              ><template #suffix> <span class="icon-share" /> </template
            ></BaseButton>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>
<script setup lang="ts">
interface Props {
  oldPrice: string
  allPrice: string
  cashBack: string
  isDiscount: boolean
  isCashback: boolean
}

defineProps<Props>()

const show = ref(false)

function close() {
  show.value = false
}
</script>
