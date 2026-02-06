<template>
  <div class="min-h-screen bg-[#fdecec] flex justify-center py-16">
    <div class="w-full max-w-md md:max-w-lg lg:max-w-xl">
      <!-- Profile Card -->
      <div
        class="relative rounded-3xl p-6 text-white shadow-xl"
        style="background: linear-gradient(180deg, #d10000, #7a0000);"
      >
        <!-- Avatar -->
        <div class="flex justify-center -mt-12 mb-4">
          <img
            :src="avatarUrl"
            alt="avatar"
            class="w-20 h-20 rounded-full border-4 border-white bg-white object-cover"
          />
        </div>

        <!-- Name -->
        <h2 class="text-center text-xl font-semibold mb-1">
          {{ profile?.name || '-' }}
        </h2>

        <!-- Level & Gold -->
        <div class="flex justify-center gap-6 text-sm opacity-90">
          <div>⭐ Lv {{ profile?.gamification?.level ?? 0 }}</div>
          <div>🟡 {{ profile?.gamification?.gold ?? 0 }}</div>
        </div>
      </div>

      <!-- Settings Card -->
      <div class="bg-white rounded-2xl shadow p-4 mt-4 text-sm">
        <div class="flex justify-between">
          <span class="text-gray-500">Focus Duration</span>
          <span class="font-medium">
            {{ profile?.settings?.focus_duration ?? '-' }} menit
          </span>
        </div>
      </div>
      <!-- Logout Button -->
      <div class="mt-6">
        <button
          @click="handleLogout"
          class="w-full flex items-center justify-center gap-2 rounded-xl
                bg-red-600 py-3 text-white font-semibold
                hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user, fetchUser, logout } = useAuth()

onMounted(() => {
  if (!user.value) {
    fetchUser()
  }
})

const profile = computed(() => user.value)

const avatarUrl = computed(() => {
  if (!profile.value?.avatar) return '/avatar-placeholder.png'
  return `${useRuntimeConfig().public.apiBaseUrl}/${profile.value.avatar}`
})

const handleLogout = async () => {
  await logout()
}

definePageMeta({ 
  layout: 'default',
})
</script>


