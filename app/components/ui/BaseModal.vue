<template>
  <div class="space-y-4">
    <h2 class="text-lg font-semibold">
      Game Result
    </h2>

    <p>XP Gained: {{ result.xp_gained }}</p>
    <p>Gold Gained: {{ result.gold_gained }}</p>

    <p v-if="result.is_level_up">
      🎉 Level Up!
    </p>

    <button
      class="border px-4 py-2"
      @click="$emit('restart')"
    >
      Main Lagi
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  result: any
}>()

defineEmits<{
  (e: 'restart'): void
}>()
</script>
