<script setup lang="ts">
import PomodoroCard from './PomodoroCard.vue'
import { usePomodoro } from '~/composables/usePomodoro'

const { isRunning } = usePomodoro()
const open = ref(false)

watchEffect(() => {
  if (isRunning.value) open.value = true
})
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Button -->
    <button
      v-show="!open"
      class="bg-red-600 text-white px-4 py-2 rounded-full shadow"
      @click="open = true"
    >
      Pomodoro
    </button>

    <!-- Card (NOT UNMOUNTED) -->
    <div v-show="open">
      <PomodoroCard />
      <button
        class="mt-2 text-xs text-gray-500"
        @click="open = false"
      >
        minimize
      </button>
    </div>
  </div>
</template>
