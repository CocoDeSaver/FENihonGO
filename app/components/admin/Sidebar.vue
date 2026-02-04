<!-- components/admin/Sidebar.vue -->
<template>
  <aside class="w-64 bg-slate-900 text-white flex flex-col">
    <div class="px-6 py-4 font-bold text-xl border-b border-slate-700">
      Admin NihonGO!
    </div>

    <nav class="flex-1 px-4 py-6 space-y-2">
      <NuxtLink v-for="item in menu" :key="item.to"
        :to="item.to"
        class="block px-4 py-2 rounded hover:bg-slate-700">
        {{ item.label }}
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup>
const menu = [
  { label: 'Dashboard', to: '/admin/admindashboard' },
  { label: 'Chapters', to: '/admin/chapters' },
  { label: 'Monsters', to: '/admin/monsters' },
  { label: 'Stages', to: '/admin/stages' },
  { label: 'Flashcards', to: '/admin/flashcards' },
  { label: 'Quizzes', to: '/admin/quizzes' }
]
</script>
