<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { isLoggedIn } = useAuth()
const { fetchProfile } = useUser()

watchEffect(async () => {
  if (isLoggedIn.value) {
    await fetchProfile()
  }
})
</script>