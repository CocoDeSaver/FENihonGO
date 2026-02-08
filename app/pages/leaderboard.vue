<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-xl mx-auto space-y-4">

      <h1 class="text-xl font-semibold text-gray-800">
        Leaderboard
      </h1>

      <!-- LOADING -->
      <p v-if="loading" class="text-gray-500">
        Memuat leaderboard...
      </p>

      <!-- EMPTY -->
      <p
        v-else-if="leaderboard.length === 0"
        class="text-gray-500"
      >
        Belum ada data leaderboard
      </p>

      <!-- LIST -->
      <ul v-else class="space-y-2">
        <li
          v-for="(item, index) in leaderboard"
          :key="item.user_id"
          class="flex justify-between items-center bg-white p-3 rounded border"
        >
          <div class="flex items-center gap-3">
            <span class="font-semibold">
              {{ index + 1 }}
            </span>
            <span>
              {{ item.name }}
            </span>
          </div>

          <span class="font-semibold">
            {{ item.points }}
          </span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useApi } from '~/composables/useApi'

/**
 * STATE
 */
const leaderboard = ref<any[]>([])
const loading = ref(true)

/**
 * API
 */
const api = useApi()

const fetchLeaderboard = async () => {
  loading.value = true
  try {
    const res = await api('/leaderboard') as { data?: any[] } | any[]
    leaderboard.value = (res as any).data ?? res
  } catch (err) {
    console.error('Failed fetch leaderboard', err)
    leaderboard.value = []
  } finally {
    loading.value = false
  }
}

/**
 * LIFECYCLE
 */
onMounted(() => {
  fetchLeaderboard()
})
</script>
