<template>
  <div class="min-h-screen h-full flex flex-col">
    <CardsBalanceCurrent :loading="loading" data="72000" />
    <div class="flex gap-2 flex-col bg-white py-4 min-h-screen">
      <div class="container">
        <div class="flex justify-between items-center cursor-pointer mb-4">
          <h2 class="text-blue-400 font-bold text-base leading-[22px]">
            {{ $t('balance_header_title') }}
          </h2>
          <NuxtLink to="/balance/operations">
            <p class="text-blue font-medium text-xs">
              {{ $t('see_all') }}
            </p>
          </NuxtLink>
        </div>

        <div class="divide-y divide-gray-800">
          <CardsBalanceList
            v-for="(item, index) in OperationList"
            :key="index"
            :data="item"
            @click="openModal"
          />
        </div>
      </div>
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

<script setup>
import { OperationList } from '~/data/balance.ts'
import { usePositionStore } from '~/store/position.js'
definePageMeta({
  layout: 'custom',
})

const show = ref(false)
const positionStore = usePositionStore()
const loading = ref(true)
function openModal() {
  show.value = true
  positionStore.isVisible = false
}
function close() {
  show.value = false
  positionStore.isVisible = true
}
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>
