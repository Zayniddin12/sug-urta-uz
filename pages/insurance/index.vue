<template>
  <div>
    <div class="bg-white py-2 mb-4">
      <div class="flex gap-2 container">
        <BaseTab
          v-model="activeTab"
          :list="insuranceTypeList()"
          show-divider
          wrapper-class="w-full"
          itemClass="!w-full"
          active-class="!rounded-lg"
          active-items-class="!rounded-lg !text-blue-400"
        />
        <div
          class="size-11 rounded-xl bg-white flex-center border-[1.5px] border-gray-800 shrink-0"
          @click="noFooter = !noFooter"
        >
          <Transition mode="out-in">
            <span
              v-if="!noFooter"
              class="icon-burger text-2xl text-gray-600 shrink-0"
            />
            <span v-else class="icon-hot-dog text-2xl text-gray-600 shrink-0" />
          </Transition>
        </div>
      </div>
      <div class="container flex gap-2 py-2">
        <ClientOnly>
          <FormInput
            :placeholder="$t('search')"
            v-model="search"
            containerClass="!border-gray-900 !shadow-none !rounded-xl"
            inputClass="!px-0"
          >
            <template #suffix>
              <span v-if="!isClose" class="icon-search text-xl text-gray-600" />
              <span
                v-else
                @click="clear"
                class="icon-close text-xl text-gray-600 transition-300 cursor-pointer hover:text-red"
              />
            </template>
          </FormInput>
        </ClientOnly>
        <div
          :class="filterCard ? 'bg-gray-800' : 'bg-white'"
          class="size-12 rounded-xl flex-center border-[1.5px] border-gray-900 shrink-0 transition-300 relative"
          @click="filterCard = !filterCard"
        >
          <span class="icon-filter text-2xl text-gray-600 shrink-0" />
          <img
            v-if="type"
            src="/images/circle-red.svg"
            alt="circle-red"
            class="absolute right-4 bottom-3"
          />
        </div>
      </div>
      <CollapseTransition>
        <div
          v-if="filterCard"
          class="container py-2 border-y border-gray-800 flex gap-2"
        >
          <FormSelect
            v-model="type"
            :options="getProgrammesOptions"
            :placeholder="$t('all')"
            class="w-full"
          />
          <div class="size-12 bg-blue rounded-[10px] flex-center">
            <div
              class="size-[calc(48px-2px)] rounded-[10px] bg-white-overlay-blue flex items-center justify-center text-white cursor-pointer overflow-hidden shadow-blue-custom border border-white/[12%]"
            >
              <span class="icon-check text-white text-lg" />
            </div>
          </div>
        </div>
      </CollapseTransition>
    </div>
    <div>
      <Swiper
        :slides-per-view="1"
        :space-between="10"
        @slideChange="onSlideChange"
        ref="swiperRef"
      >
        <SwiperSlide v-for="(item, index) in insuranceTypeList()" :key="index">
          <div class="container">
            <div v-if="activeTab !== 'clients'">
              <Transition mode="out-in">
                <div :key="loading">
                  <div v-if="!loading" class="flex flex-col gap-2">
                    <CardsInsurance
                      v-for="(data, index) in insurances"
                      :key="index"
                      @click="navigateTo(`/insurance/${data?.id}`)"
                      :data="data"
                      :no-footer="noFooter"
                    />
                  </div>
                  <div v-else class="flex flex-col gap-2">
                    <CardsInsuranceLoading
                      v-for="item in 5"
                      :key="item"
                      :no-footer="noFooter"
                    />
                  </div>
                </div>
              </Transition>
            </div>
            <div v-else>
              <CardsAdvertisementIncome class="w-full" :fullWidth="true" />
              <Transition mode="out-in">
                <div :key="loading">
                  <div v-if="!loading" class="space-y-2 w-full mt-4">
                    <CardsClientList
                      v-for="(item, indx) in clients"
                      :key="indx"
                      :data="item"
                      @click="
                        navigateTo(
                          `/${locale}/insurance/clients/${item?.fullName}`
                        )
                      "
                    />
                  </div>
                  <div v-else class="space-y-2 w-full mt-4">
                    <CardsClientListLoading v-for="item in 6" :key="item" />
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useRouteQuery } from '@vueuse/router'
definePageMeta({
  layout: 'custom',
})
import { clients, insurances } from '~/data/insurance'
import { insuranceTypeList } from '~/data'

const { locale } = useI18n()
const loading = ref(true)
const noFooter = ref(false)

const activeTab = ref('active')
const filterCard = ref(false)
const type = ref()
const search = useRouteQuery('search', '')
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})
const getProgrammesOptions = [
  {
    name: 'spark',
    id: 1,
  },
  {
    name: 'malibu',
    id: 2,
  },
  {
    name: 'colobalt',
    id: 3,
  },
  {
    name: 'damas',
    id: 4,
  },
  {
    name: 'tesla',
    id: 5,
  },
]
watch(
  search,
  () => {
    console.log(search.value)
  },
  { deep: true }
)
const insuranceTypes = computed(() => insuranceTypeList())
function onSlideChange(item: any) {
  console.log(item.activeIndex)
  activeTab.value =
    item.activeIndex === 0
      ? 'active'
      : item.activeIndex === 1
      ? 'completed'
      : 'clients'
}
</script>
