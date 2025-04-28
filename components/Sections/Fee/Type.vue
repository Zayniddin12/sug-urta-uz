<template>
  <div>
    <div class="my-6 py-3 px-4 rounded-20 border border-gray"></div>
    <div>
      <div class="grid grid-cols-1 gap-3">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="
            activeRadio == index + 1
              ? 'bg-white border-primary'
              : ' bg-gray border-gray'
          "
          class="rounded-xl transition-300 border hover:!border-primary transition-300"
          @click="activeRadio = !disabled ? item[valueKey] : modelValue"
        >
          <FormRadio
            v-model="activeRadio"
            :name="radioName"
            :value="index + 1"
            class="flex-row-reverse !justify-between !w-full cursor-pointer"
            v-bind="{ disabled }"
          >
            <template #label>
              <div class="flex gap-2">
                <div height="24px" width="24px">
                  <img
                    :src="item?.icon || '/images/default/default.svg'"
                    alt="app of payment"
                    class="h-6"
                  />
                </div>
                <div height="14px" width="w-[60%]">
                  <p
                    v-if="item?.title"
                    class="text-sm font-normal leading-5 text-dark-blue-300"
                  >
                    {{ item?.title }}
                  </p>
                </div>
              </div>
            </template>
          </FormRadio>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  modelValue: string | number | object
  items: Array<object>
  disabled?: boolean
  loading: boolean
}

const props = withDefaults(defineProps<Props>(), {
  wrapperClass: 'flex flex-wrap gap-4',
  labelKey: 'name',
  valueKey: 'id',
  disabled: false,
})
const activeRadio = ref(props.modelValue)
const activeCardRadio = ref(props.modelValue)
const isDisabledCard = ref(true)

const radioName = `k-radio-${Math.floor(Math.random() * 1000)}`

const value = ref<string | number | object>([])
const tabIndex = ref(0)
watch(
  () => activeRadio.value,
  (newValue: any) => {
    if (newValue !== value.value) {
      value.value = newValue
    }
  }
)
watch(
  activeCardRadio,
  (newValue: any) => {
    if (newValue !== value.value) {
      value.value = newValue
    }

    if (activeCardRadio) {
      isDisabledCard.value = false
    }
  },
  { deep: true }
)
</script>
