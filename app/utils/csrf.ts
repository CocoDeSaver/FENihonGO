export const useCsrf = async () => {
  const config = useRuntimeConfig()
  const backendUrl = config.public.backendUrl

  if (!backendUrl) {
    throw new Error('Backend URL is missing')
  }

  await $fetch(`${backendUrl}/sanctum/csrf-cookie`, {
    credentials: 'include',
  })
}
