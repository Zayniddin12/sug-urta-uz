<template>
  <div class="bg-white min-h-screen">
    <div class="container pt-5">
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileHeader
            v-if="!loading"
            :image="user?.image"
            :full-name="user?.fullName"
            :location="user?.location"
          />
          <CardsProfileHeaderLoading v-else />
        </div>
      </Transition>

      <div class="divide-y divide-y-gray-800 mt-5">
        <NuxtLinkLocale
          v-for="(item, key) in profileNavigations()"
          :key
          :to="`${item.value}`"
          class="flex items-center justify-between text-gray-400 py-4 cursor-pointer"
          @click="openModal(item.value)"
        >
          <div class="flex gap-3 items-center">
            <span :class="item.icon" class="text-2xl" />
            <p class="text-base font-medium leading-[22px]">
              {{ item?.label }}
            </p>
          </div>
          <span class="icon-chevron text-base -rotate-90" />
        </NuxtLinkLocale>
      </div>
    </div>
    <Modal :title="$t('full_information')" v-bind="{ show }" @close="close">
      <p class="my-7 test-sm font-medium text-gray-400 leading-5">
        Insurance is a contract, represented by a policy, in which a
        policyholder receives financial protection or reimbursement against
        losses from an insurance company. The company pools clients’ risks to
        make payments more affordable for the insured. Most people have some
        insurance: for their car, their house, their healthcare, or their life.
      </p></Modal
    >
  </div>
</template>
<script setup lang="ts">
import { user } from '~/data/profile'
import { profileNavigations } from '~/data'
import { usePositionStore } from '~/store/position'
definePageMeta({
  layout: 'custom',
})

const show = ref(false)
const positionStore = usePositionStore()
function openModal(item: string) {
  if (item === '') {
    show.value = true
    positionStore.isVisible = false
  }
}
function close() {
  show.value = false
  positionStore.isVisible = true
}
</script>
