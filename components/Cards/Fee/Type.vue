<template>
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
        class="rounded-xl transition-300 border hover:!border-primary transition-300 bg-gray-700"
        @click="changeActive(item.id)"
      >
        <FormRadio
          :modelValue="activeRadio"
          :name="radioName"
          :value="index + 1"
          class="flex-row-reverse !justify-between !w-full cursor-pointer"
          v-bind="{ disabled }"
        >
          <template #label>
            <div class="flex gap-2">
              <div>
                <Transition mode="out-in">
                  <div :key="loading">
                    <img
                      v-if="!loading"
                      :src="item?.icon || '/images/default/default.svg'"
                      alt="app of payment"
                      class="h-6"
                    />
                    <span v-else class="size-6 shimmer rounded-20" />
                  </div>
                </Transition>
              </div>
              <div>
                <Transition mode="out-in">
                  <div :key="loading">
                    <p
                      v-if="item?.title && !loading"
                      class="text-sm font-normal leading-5 text-dark-blue-300"
                    >
                      {{ item?.title }}
                    </p>
                    <span v-else class="w-[100px] h-2 rounded shimmer" />
                  </div>
                </Transition>
              </div>
              <div
                v-if="item?.discard && !loading"
                class="leading-130 text-dark-blue-300 p-1 bg-red-100 rounded-full flex items-center gap-1 text-red text-[10px] font-medium ml-4"
              >
                <span>Chegirma</span> <span>{{ item?.discard }}%</span>
              </div>
            </div>
          </template>
        </FormRadio>
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
const activeCardRadio = ref(1)
const isDisabledCard = ref(true)

const radioName = `k-radio-${Math.floor(Math.random() * 1000)}`

const value = ref<string | number | object>([])

function changeActive(item: number) {
  console.log('dfewfew')
  activeRadio.value = !props.disabled ? item : props.modelValue
}
watch(
  () => activeRadio.value,
  (newValue: any) => {
    console.log(activeRadio.value)
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
