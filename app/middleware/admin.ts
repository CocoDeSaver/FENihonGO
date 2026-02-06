export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth()

  if (!auth.user.value) {
    return navigateTo('/login')
  }

  if (auth.user.value.role !== 'admin') {
    return navigateTo('/403')
  }
})
