<template>
  <div
    class="border rounded p-10 text-center cursor-pointer select-none"
    @click="$emit('toggle')"
  >
    <p v-if="!showAnswer" class="text-6xl font-bold">
      {{ card.kanji }}
    </p>

    <div v-else class="space-y-2">
      <p class="text-xl font-semibold">{{ card.romaji }}</p>
      <p class="text-gray-600">{{ card.meaning }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  card: any
  showAnswer: boolean
}>()

defineEmits<{
  (e: 'toggle'): void
}>()
</script>
