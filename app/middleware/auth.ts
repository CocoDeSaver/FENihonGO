export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth()

  await auth.initAuth()

  if (!auth.isLoggedIn.value) {
    return navigateTo('/login')
  }
})
