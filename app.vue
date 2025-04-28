<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
const store = useAuthStore()

onMounted(async () => {
  await store.authInit()
})

// ToDo: Change this seo data with real data

// useSeoMeta({
//   title: 'Og Title',
//   description: 'Og Description',
//   OgDescription: 'Og Description',
//   ogTitle: `Og Title`,
//   twitterTitle: `Og Title`,
//   twitterCard: 'summary',
//   twitterSite: '@commeta_sharh',
//   ogImage: 'Og Image',
//   twitterImage: 'Og Image',
// })
</script>
