export default defineNuxtRouteMiddleware(async (to) => {
  const user = useState<any>('auth-user')

  // Jangan redirect kalau sedang di halaman onboarding
  if (to.path === '/onboarding') return

  // Tunggu hingga user state siap
  if (!user.value) {
    // Bisa tunggu sebentar atau biarkan auth middleware handle
    return
  }

  if (!user.value.settings?.focus_duration) {
    return navigateTo('/onboarding')
  }
})
