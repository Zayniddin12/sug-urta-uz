<template>
  <div
    class="container min-h-screen flex flex-col items-center justify-between py-5 relative"
  >
    <div class="w-full">
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileHeader
            v-if="!loading"
            :image="user?.image"
            :full-name="user?.fullName"
            :location="user?.location"
          />
          <CardsProfileHeaderLoading v-else />
        </div>
      </Transition>

      <div class="mt-8">
        <SectionsProfileInfo :data="user" :loading="loading" />
      </div>
    </div>
    <NuxtLinkLocale to="/auth/visitor-step" class="w-full">
      <BaseButton
        :text="$t('next')"
        variant="primary"
        class="w-full bg-blue-500 text-white rounded-lg font-medium"
      >
        <template #suffix>
          <span class="icon-arrow" />
        </template>
      </BaseButton>
    </NuxtLinkLocale>
  </div>
</template>
<script setup lang="ts">
import { user } from '~/data/profile'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})
</script>
