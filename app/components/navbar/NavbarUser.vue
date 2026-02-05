<template>
  <div class="flex items-center gap-4">

    <!-- Level -->
    <div
      v-if="profile?.gamification"
      class="rounded bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700"
    >
      ⭐ Lv {{ profile.gamification.level }}
    </div>

    <!-- Gold / Ticket -->
    <div
      v-if="profile?.gamification"
      class="rounded bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700"
    >
      🎟 {{ profile.gamification.gold }}
    </div>

    <!-- Avatar -->
    <NuxtLink to="/profile">
      <img
        :src="profile?.avatar || 'images/maskot.png'"
        class="h-9 w-9 rounded-full border object-cover"
      />
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
const { profile } = useUser()
watch(profile, () => {
  console.log('PROFILE DI NAVBAR:', profile.value)
})
</script>
