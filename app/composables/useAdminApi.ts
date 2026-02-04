export const useAdminApi = () => {
  const api = useApi()

  const json = (url: string, body?: any, method: 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE' = 'POST') =>
    api(url, { method, body })

  const form = (url: string, formData: FormData) =>
    api(url, { method: 'POST', body: formData })

  return { json, form }
}
