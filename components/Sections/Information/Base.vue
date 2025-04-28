<template>
  <div class="h-full flex flex-col gap-2">
    <div>
      <div class="bg-white p-4 mt-4 mb-2 rounded-3xl">
        <p class="text-sm font-medium leading-5 text-gray-400 mb-2">
          {{ $t('insurance_company') }}
        </p>
        <h3 class="text-base font-bold leading-130 text-black-100">
          Gross Incurance MChJ
        </h3>
        <p class="text-sm text-gray-400 leading-5 font-medium mt-4 mb-2">
          {{ $t('recover_money') }}
        </p>
        <p class="text-blue text-lg font-medium leading-5 mb-4">
          50 000 000 UZS
        </p>

        <div class="flex flex-col gap-4">
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
          <FormGroup
            :label="$t('number_of_driver')"
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
      <div class="bg-white p-4 mt-2 mb-2 rounded-3xl flex flex-col gap-4">
        <FormGroup
          :label="$t('insurance_duration')"
          label-class="!text-sm font-medium leading-5 !text-gray-400"
        >
          <FormSelect
            v-model="values.values.duration"
            :error="values.$v.value?.duration?.$error"
            :options="getProgrammesOptions"
            :placeholder="$t('choose')"
          />
        </FormGroup>
        <FormRangePick
          :start-value="values.values.from"
          :placeholder="$t('starting_date_placeholder')"
          :label="$t('starting_date')"
          :is-clear="isClear"
          @update:model-value="upDateRangePick"
        />
        <FormRangePick
          :start-value="values.values.to"
          :placeholder="$t('ending_date_placeholder')"
          :label="$t('ending_date')"
          :is-clear="isClear"
          @update:model-value="upDateRangePick"
        />
      </div>
    </div>
    <CardsNavigate @goBack="emit('goBack')" @goForward="emit('goForward')" />
  </div>
</template>
<script setup lang="ts">
import { required } from '@vuelidate/validators'
const isClear = ref(false)
const values = useForm(
  {
    type: '',
    location: '',
    duration: '',
    number: '',
    from: '',
    to: '',
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
const emit = defineEmits(['goBack', 'goForward'])

function clearData() {
  console.log(values.values.type)
  values.$v?.value?.$reset()
  values.values.type = ''
  values.values.location = ''
  values.values.duration = ''
  values.values.number = ''
}
function upDateRangePick(value: [number, number]) {
  isClear.value = false
  values.values.from = value[0]
  values.values.to = value[1]
}
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
</script>
