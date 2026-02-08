<template>
  <BaseModal :result="null" @close="$emit('close')">
    <div class="space-y-4 text-center">

      <h2 class="text-lg font-semibold">
        🎟️ Tiket Habis
      </h2>

      <p class="text-sm text-gray-600">
        Tiket kamu sudah habis.
        Silakan belajar dulu untuk mendapatkan tiket baru.
      </p>

      <div class="flex gap-3 justify-center pt-2">
        <button
          class="px-4 py-2 border rounded"
          @click="$emit('close')"
        >
          Tutup
        </button>

        <NuxtLink
          to="/pomodoro"
          class="px-4 py-2 bg-red-600 text-white rounded"
        >
          Belajar
        </NuxtLink>
      </div>

    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '~/components/ui/BaseModal.vue'

defineEmits<{
  (e: 'close'): void
}>()
</script>
