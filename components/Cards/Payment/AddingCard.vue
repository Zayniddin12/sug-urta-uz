<template>
  <div class="bg-white rounded-3xl p-4">
    <FormGroup
      :label="$t('number_of_card')"
      label-class="text-sm font-medium leading-5 text-gray-400"
    >
      <ClientOnly>
        <FormInput
          :placeholder="'0000 0000 0000 0000'"
          :maska="'#### #### #### ####'"
          class="rounded-xl !shadow-none"
          v-model="card"
          input-class="!px-0 !text-base !font-medium !leading-5 !text-gray-500"
        >
          <template #suffix>
            <span class="icon-credit-card text-20 text-gray-300" />
          </template>
        </FormInput>
      </ClientOnly>
    </FormGroup>
    <FormGroup
      :label="$t('end_date')"
      label-class="text-sm font-medium leading-5 text-gray-400 mt-4"
    >
      <ClientOnly>
        <FormInput
          :placeholder="'00/00'"
          :maska="'##/##'"
          class="rounded-xl !shadow-none !w-fit"
          v-model="endDate"
          input-class="!px-0 !text-base !font-medium !leading-5 !text-gray-500 !max-w-[70px] !w-fit"
        />
      </ClientOnly>
    </FormGroup>
  </div>
</template>
<script setup lang="ts">
const card = ref('')
const endDate = ref('')
</script>
