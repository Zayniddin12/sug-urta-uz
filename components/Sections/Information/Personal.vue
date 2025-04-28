<template>
  <div class="pt-4 flex flex-col justify-between h-full">
    <div class="p-4 rounded-3xl bg-white">
      <FormGroup
        :label="$t('car_number')"
        label-class="!text-gray-400 !text-sm !font-medium !leading-5"
      >
        <FormNumberOfCar v-model="values" />
      </FormGroup>

      <FormGroup
        class="mt-4"
        :label="$t('technician_passport')"
        label-class="!text-gray-400 !text-sm !font-medium !leading-5"
      >
        <div class="flex gap-2">
          <ClientOnly>
            <FormInput
              :maska="'aaa'"
              :placeholder="'AAA'"
              class="max-w-[80px] rounded-xl !shadow-none"
              inputClass="!p-0 uppercase !text-sm !font-semibold !leading-5 !text-black-100"
            />
            <FormInput
              :placeholder="'0000000'"
              :maska="'#######'"
              class="rounded-xl !shadow-none"
              input-class="!px-0 !text-sm !font-semibold !leading-5 !text-black-100"
            />
          </ClientOnly>
        </div>
      </FormGroup>
    </div>

    <CardsNavigate @goBack="emit('goBack')" @goForward="emit('goForward')" />
  </div>
</template>
<script setup lang="ts">
const values = ref()

const emit = defineEmits(['goBack', 'goForward'])
</script>
