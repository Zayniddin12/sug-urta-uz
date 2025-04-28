<template>
  <div class="bg-white">
    <LayoutsHeader
      :title="$t('personal_information')"
      :loading="loading"
      class="border-y border-gray-800"
    />
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
    </div>
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
