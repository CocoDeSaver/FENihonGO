<template>
  <header class="h-14 bg-white border-b flex items-center justify-between px-6">
    <h1 class="font-semibold text-gray-700">
      <slot name="title">Admin Dashboard</slot>
    </h1>

    <div class="flex items-center gap-4">
      <span class="text-sm text-gray-600">Admin</span>

      <button
        class="text-sm text-red-500 hover:underline"
        @click="handleLogout"
      >
        Logout
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const { logout } = useAuth()

const handleLogout = async () => {
  await logout()
}
</script>
