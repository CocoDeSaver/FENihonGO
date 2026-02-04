export default defineNuxtRouteMiddleware(() => {
  const user = useState('auth-user')

  if (!user.value) {
    return navigateTo('/login')
  }
})
