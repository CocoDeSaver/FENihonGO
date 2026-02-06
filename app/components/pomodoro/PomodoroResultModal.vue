<script setup lang="ts">
defineProps<{
  result: any
}>()

defineEmits(['close'])
</script>

<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center">
    <div class="bg-white p-6 rounded-xl w-80">
      <h2 class="text-lg font-bold mb-4">
        Pomodoro Selesai
      </h2>

      <p>Status: {{ result.log.status }}</p>
      <p>Durasi: {{ result.log.duration }} menit</p>

      <hr class="my-3" />

      <p>XP: +{{ result.rewards.xp }}</p>
      <p>Gold: +{{ result.rewards.gold }}</p>
      <p>Ticket: +{{ result.rewards.tickets }}</p>

      <button
        class="mt-4 w-full bg-red-600 text-white py-2 rounded"
        @click="$emit('close')"
      >
        OK
      </button>
    </div>
  </div>
</template>
