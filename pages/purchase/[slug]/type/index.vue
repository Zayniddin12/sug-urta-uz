<template>
  <div class="container px-4 relative min-h-screen h-full">
    <LayoutsHeader title="Avtosug‘urta" :loading="loading" />
    <CardsWrapperTitle :data="titleData" class="mt-4 mb-2" />
    <div class="bg-white rounded-2xl p-4 flex flex-col gap-4">
      <p class="text-blue-400 text-lg font-medium leading-6 mb-6">
        {{ $t('calculation_and_search') }}
      </p>
      <FormGroup
        :label="$t('type_of_car')"
        label-class="!text-sm font-medium leading-5 !text-gray-400"
      >
        <FormSelect
          v-model="values.values.type"
          :error="values.$v.value?.type?.$error"
          :options="getProgrammesOptions"
          :placeholder="$t('choose')"
        />
      </FormGroup>
      <FormGroup
        :label="$t('location_registration')"
        label-class="!text-sm font-medium leading-5 !text-gray-400"
      >
        <FormSelect
          v-model="values.values.location"
          :error="values.$v.value?.location?.$error"
          :options="getProgrammesOptions"
          :placeholder="$t('choose')"
        />
      </FormGroup>
      <div class="flex gap-4">
        <FormGroup
          class="w-full"
          :label="$t('location_registration')"
          label-class="!text-sm font-medium leading-5 !text-gray-400"
        >
          <FormSelect
            v-model="values.values.duration"
            :error="values.$v.value?.duration?.$error"
            :options="getProgrammesOptions"
            :placeholder="$t('choose')"
          />
        </FormGroup>
        <FormGroup
          class="w-full"
          :label="$t('location_registration')"
          label-class="!text-sm font-medium leading-5 !text-gray-400"
        >
          <FormSelect
            v-model="values.values.number"
            :error="values.$v.value?.number?.$error"
            :options="getProgrammesOptions"
            :placeholder="$t('choose')"
          />
        </FormGroup>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full bg-white p-4 flex gap-2">
      <div
        @click="clearData"
        class="p-4 flex-center bg-gray-700 rounded-xl cursor-pointer transition-300"
      >
        <span class="icon-clear text-gray-400 text-2xl" />
      </div>
      <NuxtLinkLocale v-if="!disabled" :to="fullUrl" class="w-full">
        <BaseButton
          @click="submitData"
          variant="bg-blue"
          :text="$t('calculation_nad_finding')"
          class="w-full"
        >
          <template #suffix>
            <span class="icon-search text-20" />
          </template>
        </BaseButton>
      </NuxtLinkLocale>
      <BaseButton
        v-else
        variant="disabled-primary"
        :text="$t('calculation_nad_finding')"
        class="w-full"
      >
        <template #suffix>
          <span class="icon-search text-20" />
        </template>
      </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { titleData } from '~/data/service'
import { required } from '@vuelidate/validators'
const route = useRoute()
const disabled = ref(true)
const values = useForm(
  {
    type: '',
    location: '',
    duration: '',
    number: '',
  },
  {
    type: {
      required,
    },
    location: {
      required,
    },
    duration: {
      required,
    },
    number: {
      required,
    },
  }
)
const fullUrl = computed(() => {
  const slug = route.params.slug
  const typeSlug = titleData?.slug
  const params = new URLSearchParams()

  if (values.values.type) params.append('type', values.values.type)
  if (values.values.location) params.append('location', values.values.location)
  if (values.values.duration) params.append('duration', values.values.duration)
  if (values.values.number) params.append('number', values.values.number)

  const query = params.toString()
  const typePath = typeSlug ? `/type/${typeSlug}` : ''

  return `/purchase/${slug}${typePath}${query ? '?' + query : ''}`
})

function clearData() {
  console.log(values.values.type)
  values.$v?.value?.$reset()
  values.values.type = ''
  values.values.location = ''
  values.values.duration = ''
  values.values.number = ''
}

watch(
  values.values,
  () => {
    if (!values.$v.value.$invalid) {
      disabled.value = false
    }
  },
  { deep: true }
)

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
    name: 'lobalt',
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
</script>
