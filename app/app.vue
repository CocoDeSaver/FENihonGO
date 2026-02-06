<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const auth = useAuth()
const user = useUser()

onMounted(async () => {
  await auth.initAuth()

  if (auth.isLoggedIn.value) {
    await user.fetchProfile()
  }
})
</script>
