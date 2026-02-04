<template>
  <nav class="sticky top-0 z-50 w-full border-b border-red-600 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex h-16 items-center justify-between">
        <!-- Left: Logo -->
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded bg-red-600 text-white font-bold">
            愛
          </div>
          <div class="leading-tight">
            <p class="text-lg font-bold text-red-600">NihonGO!</p>
            <p class="text-xs text-gray-500">Learn · Play · Master</p>
          </div>
        </div>

        <!-- Center: Menu -->
        <div class="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <NuxtLink to="/" class="flex items-center gap-2 hover:text-red-600">
            <span>Home</span>
          </NuxtLink>
          <NuxtLink to="/courses" class="flex items-center gap-2 hover:text-red-600">
            <span>Courses</span>
          </NuxtLink>
          <NuxtLink to="/leaderboard" class="flex items-center gap-2 hover:text-red-600">
            <span>Leaderboard</span>
          </NuxtLink>
        </div>

        <!-- Right: Auth Buttons -->
        <div class="flex items-center gap-3">
          <NuxtLink
            to="/register"
            class="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            Sign Up
          </NuxtLink>
          <NuxtLink
            to="/login"
            class="rounded border border-red-600 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
          >
            Login
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

