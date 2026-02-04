<template>
  <nav class="sticky top-0 z-50 w-full border-b border-red-600 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex h-16 items-center justify-between">

        <!-- Logo -->
        <Logo />

        <!-- Menu -->
        <NavMenu />

        <!-- Right Section -->
        <NavbarGuest v-if="!isLoggedIn" />
        <NavbarUser v-else />

      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { user } = useAuth()

const isLoggedIn = computed(() => !!user.value)
</script>
