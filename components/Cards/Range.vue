<template>
  <div class="block">
    <div class="relative w-full flex items-center pt-6 pb-1.5 md:pr-6">
      <div
        v-for="(item, index) in steps"
        :key="index"
        class="flex items-center justify-center list-step select-none w-full"
      >
        <div
          class="w-full h-0.5 my-3 colored-line"
          :class="[
            item?.check === modelValue
              ? stepLineCurrentColor
              : item?.check < modelValue
              ? stepLineCheckedColor
              : stepLineColor,
          ]"
        />
        <div
          :class="[checkStepActive(item?.check), stepStyle]"
          class="flex items-center justify-center !size-[28px] border-4 border-gray-800 flex-shrink-0 !text-inherit transition duration-300"
        >
          <div
            :class="checkCircleActive(item?.check)"
            class="size-full rounded-full border-2 flex-center"
          >
            <div
              :class="checkIconActive(item?.check)"
              class="!size-2 rounded-full"
            />
          </div>
        </div>
        <div
          class="w-full h-[2px] my-3 colored-line"
          :class="[
            item?.check + 1 === modelValue
              ? stepLineCurrentColor
              : item?.check < modelValue
              ? stepLineCheckedColor
              : stepLineColor,
          ]"
        />
      </div>
    </div>
    <div
      class="w-full grid grid-cols-3 min-[450px]:gap-1.5 text-xs font-semibold leading-4 text-blue-400 text-center"
    >
      <p>{{ $t('base_information') }}</p>
      <p>{{ $t('personal_information') }}</p>
      <p>{{ $t('make_pay') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  modelValue?: number
  steps: {
    text?: string
    icon?: string
    check?: number
  }[]
  stepType?: 'number' | 'icon'
  iconStyle?: string
  iconCheckedStyle?: string
  stepStyle?: string
  currentStyle?: string
  checkedStyle?: string
  defaultStyle?: string
  stepLineColor?: string
  stepLineCheckedColor?: string
  stepLineCurrentColor?: string
  circleStyle?: string
  circleActiveStyle?: string
  circleCheckedStyle?: string
  iconActiveStyle?: string
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: 2,
  steps: () => [
    {
      icon: 'icon-phone',
      check: 1,
    },
    {
      icon: 'icon-calendar-event',
      check: 2,
    },
    {
      icon: 'icon-credit-card1',
      check: 3,
    },
  ],
  stepStyle: 'flex items-center space-x-2 rounded-full size-[28px] text-white',
  iconActiveStyle: 'bg-blue',
  iconStyle: 'size-2 bg-gray-900',
  defaultStyle: 'bg-white text-gray-900',
  currentStyle: 'bg-white text-white !border-4 !border-blue/[30%]',
  checkedStyle: 'bg-blue text-white !border-4 !border-gray-800',
  stepLineColor: 'bg-gray-900',
  stepLineCheckedColor: 'bg-blue',
  stepLineCurrentColor: 'bg-primary',
  circleActiveStyle: 'border-blue',
  circleStyle: 'border-gray-900 !bg-white',
  stepType: 'number',
  circleCheckedStyle: 'bg-blue !border-blue',
  iconCheckedStyle: '!bg-white',
})

function checkStepActive(target: number) {
  if (target === props.modelValue) {
    return props.currentStyle
  } else if (props.modelValue > target) {
    return props.checkedStyle
  } else {
    return props.defaultStyle
  }
}

function checkIconActive(target: number) {
  if (target == props.modelValue) {
    return props.iconActiveStyle
  } else if (target < props.modelValue) {
    return props.iconCheckedStyle
  } else {
    return props.iconStyle
  }
}

function checkCircleActive(target: number) {
  if (target == props.modelValue) {
    return props.circleActiveStyle
  } else if (target < props.modelValue) {
    return props.circleCheckedStyle
  } else {
    return props.circleStyle
  }
}
</script>
