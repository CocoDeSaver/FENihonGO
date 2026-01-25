export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiUrl

  if (!baseURL) {
    throw new Error('API URL is missing')
  }

  return $fetch.create({
    baseURL,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  })
}
