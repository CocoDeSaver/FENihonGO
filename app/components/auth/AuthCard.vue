<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div
    class="w-full max-w-md bg-white rounded-xl
           shadow-lg border border-gray-100 p-10"
  >
    <h1 class="text-2xl font-bold text-[#320001]">
      {{ title }}
    </h1>

    <p v-if="subtitle" class="text-sm text-gray-500 mt-1">
      {{ subtitle }}
    </p>

    <div class="mt-6">
      <slot />
    </div>
  </div>
</template>
