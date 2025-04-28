<template>
  <div>
    <LayoutsHeader title="Avtosug‘urta" :loading="loading" />
    <div class="container">
      <FormGroup label="">
        <ClientOnly>
          <FormInput
            :placeholder="$t('search')"
            v-model="search"
            containerClass="!border-gray-300 my-2 !rounded-xl !shadow-none !pl-0"
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
      </FormGroup>

      <Transition mode="out-in">
        <div :key="loading">
          <div v-if="loading" class="grid grid-cols-1 gap-2">
            <CardsServiceCardLoading v-for="item in 5" :key="item" />
          </div>
          <div v-else class="grid grid-cols-1 gap-2">
            <CardsServiceCard
              saved
              @moreInfo="openInfoModal"
              v-for="(item, key) in servicesTypeCard"
              :key="key"
              :data="item"
              @navigateNext="
                navigateTo(`/${locale}/organization-type/${item.slug}`)
              "
            />
          </div>
        </div>
      </Transition>
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
import { servicesTypeCard } from '~/data/service'

const { locale } = useI18n()
const loading = ref(true)
const search = ref('')
const isClose = ref(false)
const show = ref(false)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
watch(
  search,
  () => {
    console.log(search.value)
    isClose.value = search.value.length
  },
  { deep: true }
)

const clear = () => {
  search.value = ''
  // emit('search', search.value)
}
function close() {
  show.value = false
}
function openInfoModal() {
  show.value = true
}
</script>
