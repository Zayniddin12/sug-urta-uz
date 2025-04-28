<template>
  <div class="py-5 container bg-white border-y border-gray-800">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div
          @click="goBackOrHome"
          class="size-8 flex-center rounded-xl bg-gray-700 shrink-0 transition-300 hover:bg-gray-500 cursor-pointer"
        >
          <span class="icon-arrow text-gray-600 text-20 block rotate-180" />
        </div>
        <Transition mode="out-in">
          <div :key="loading">
            <p
              v-if="!loading"
              class="text-blue-400 font-semibold leading-6 text-base"
            >
              {{ title }}
            </p>
            <span v-else class="shimmer w-[200px] rounded h-5" />
          </div>
        </Transition>
      </div>
      <slot name="suffix" />
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  loading: boolean
  title: string
}

defineProps<Props>()

const router = useRouter()

function goBackOrHome() {
  if (window.history.length > 1) {
    router.back() // 1 qadam ortga qaytish
  } else {
    router.push('/') // Agar tarix yo'q bo‘lsa, asosiy sahifaga
  }
}
</script>
