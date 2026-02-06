<script setup lang="ts">
import TimerDisplay from './TimerDisplay.vue'
import PomodoroResultModal from './PomodoroResultModal.vue'
import { usePomodoro } from '~/composables/usePomodoro'

const {
  isRunning,
  remaining,
  startPomodoro,
  stopPomodoro,
  lastResult,
  resetPomodoro,
} = usePomodoro()

const closeResult = () => {
  resetPomodoro()
}
</script>

<template>
  <div class="p-6 border rounded-xl w-80">
    <TimerDisplay :remaining="remaining" />

    <div class="mt-4 flex gap-2">
      <button
        class="flex-1 bg-green-600 text-white py-2 rounded"
        :disabled="isRunning"
        @click="startPomodoro"
      >
        START
      </button>

      <button
        class="flex-1 bg-red-600 text-white py-2 rounded"
        :disabled="!isRunning"
        @click="stopPomodoro('interrupted')"
      >
        GIVE UP
      </button>
    </div>

    <PomodoroResultModal
      v-if="lastResult"
      :result="lastResult"
      @close="closeResult"
    />
  </div>
</template>
