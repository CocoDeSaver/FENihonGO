<template>
  <div class="p-6 space-y-4">
    <h1 class="text-xl font-bold">API Test (Laravel Sanctum)</h1>

    <button
      @click="testLogin"
      class="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Test Login
    </button>

    <pre class="bg-gray-100 p-4 rounded text-sm">
{{ result }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useApi } from '@/utils/api'
import { useCsrf } from '@/utils/csrf'

const result = ref('Klik tombol untuk test API')

const testLogin = async () => {
  try {
    // CSRF
    await useCsrf()

    // Login
    const api = useApi()
    const res = await api('/login', {
      method: 'POST',
      body: {
        email: 'user@test.com',
        password: 'password123',
      },
    })

    result.value = JSON.stringify(res, null, 2)
  } catch (err: any) {
    result.value = JSON.stringify(err?.data || err, null, 2)
  }
}
</script>
