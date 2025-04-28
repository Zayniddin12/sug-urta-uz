<template>
  <div>
    <div class="py-8 mb-4">
      <div class="flex gap-2 container flex-col text-center font-[500]">
        <p class="text-[#64748B] text-sm">Balance</p>
        <Transition mode="out-in">
          <div :key="loading" @click="isDot = !isDot">
            <div v-if="!loading">
              <h3
                v-if="!isDot"
                class="text-[#3761E9] font-bold text-32 transition-300"
              >
                {{ formatNumberSpace(data) }} UZS
              </h3>

              <h3
                v-else
                class="text-blue leading-[48px] text-center font-medium text-32"
              >
                ••••••••
              </h3>
            </div>
            <span v-else class="w-[200px] h-[41.5px] rounded shimmer" />
          </div>
        </Transition>

        <NuxtLinkLocale
          to="/balance/operations"
          class="flex gap-4 justify-center"
        >
          <div
            class="bg-white py-2 px-4 rounded-xl cursor-pointer text-[18px] text-[#475569] font-[500] flex items-center justify-center gap-2"
          >
            <span class="icon-clock text-[22px]"></span>
          </div>
          <NuxtLinkLocale
            :to="`/balance/payment`"
            class="bg-white py-2 px-4 rounded-xl cursor-pointer text-[16px] text-[#475569] font-[500] flex items-center justify-center gap-2"
          >
            Pul yechish
            <span class="icon-redirect-vektor text-[22px]"></span>
          </NuxtLinkLocale>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumberSpace } from '~/utils'

interface Props {
  loading: boolean
  data: string
}
defineProps<Props>()

const isDot = ref(false)
</script>
