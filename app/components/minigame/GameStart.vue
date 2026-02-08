<template>
  <div class="space-y-4">
    <h1 class="text-xl font-semibold">
      Mini Games
    </h1>

    <!-- sementara hardcode stage -->
    <button
      class="border px-4 py-2"
      @click="$emit('start', 1)"
    >
      Start Stage 1
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'start', stageId: number): void
}>()
</script>
