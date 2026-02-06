<template>
  <div class="space-y-2">
    <button
      v-for="stage in stages"
      :key="stage.id"
      class="block w-full text-left border px-3 py-2"
      @click="$emit('select', stage.id)"
    >
      {{ stage.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stages: any[]
}>()

defineEmits<{
  (e: 'select', id: number): void
}>()
</script>
