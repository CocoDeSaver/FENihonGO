export default defineNuxtPlugin(() => {
  const token = useCookie<string | null>('token')

  const api = $fetch.create({
    baseURL: useRuntimeConfig().public.apiBaseUrl,
    headers: {
      Accept: 'application/json',
      'ngrok-skip-browser-warning': '69420',
      ...(token.value
        ? { Authorization: `Bearer ${token.value}` }
        : {}),
    },
  })

  return {
    provide: {
      api,
    },
  }
})
