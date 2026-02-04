// ngrok
// export default defineNuxtPlugin(() => {
//   const token = useCookie<string | null>('token')

//   const api = $fetch.create({
//     baseURL: useRuntimeConfig().public.apiBaseUrl,
//     headers: {
//       Accept: 'application/json',
//       'ngrok-skip-browser-warning': '69420',
//       ...(token.value
//         ? { Authorization: `Bearer ${token.value}` }
//         : {}),
//     },
//   })

//   return {
//     provide: {
//       api,
//     },
//   }
// })


export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl,

    onRequest({ options }) {
      const token = useCookie<string | null>('token')

      const headers = new Headers(options.headers)

      headers.set('Accept', 'application/json')

      if (token.value) {
        headers.set('Authorization', `Bearer ${token.value}`)
      }

      options.headers = headers
    },
  })

  return {
    provide: { api },
  }
})



