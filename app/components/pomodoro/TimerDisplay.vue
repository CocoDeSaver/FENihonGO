<script setup lang="ts">
defineProps<{
  remaining: number
}>()

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}
</script>

<template>
  <div class="text-4xl font-bold">
    {{ formatTime(remaining) }}
  </div>
</template>
