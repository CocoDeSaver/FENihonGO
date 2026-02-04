<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div v-for="item in stats" :key="item.label"
      class="bg-white rounded-lg p-6 shadow">
      <p class="text-sm text-gray-500">{{ item.label }}</p>
      <p class="text-2xl font-bold mt-2">{{ item.value }}</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ 
  layout: 'admin',
  middleware: ['admin'],
})


const stats = [
  { label: 'Chapters', value: 12 },
  { label: 'Stages', value: 48 },
  { label: 'Monsters', value: 10 },
  { label: 'Flashcards', value: 320 }
]
</script>
