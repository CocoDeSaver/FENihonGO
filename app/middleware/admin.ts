export default defineNuxtRouteMiddleware(() => {
  const user = useState<any>('auth-user')

  if (!user.value) {
    return navigateTo('/login')
  }

  if (user.value.role !== 'admin') {
    return navigateTo('/403')
  }
})
