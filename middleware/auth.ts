import { useAuthStore } from '~/store/auth'
import { useLocalePath } from '#i18n'

export default defineNuxtRouteMiddleware((to) => {
  const localePath = useLocalePath()
  const authStore = useAuthStore()
  const tokens = authStore.getTokens()
  const route = useRoute()
  // Ushbu sahifalar uchun middleware ishlamasin
  const skipPaths = [localePath('/'), localePath('/visitor-step')]
  if (skipPaths.includes(to.path)) return

  console.log(localePath('auth'))

  if (!tokens.access || !tokens.refresh) {
    if (to.path !== localePath('/auth')) {
      return navigateTo(localePath('/auth'), { redirectCode: 301 })
    }
  }
})
