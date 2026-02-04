<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-lg w-full max-w-lg p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-semibold text-lg">
          {{ title }}
        </h2>
        <button @click="$emit('update:modelValue', false)">✕</button>
      </div>

      <form @submit.prevent="$emit('submit')">
        <slot />

        <div class="mt-6 flex justify-end gap-2">
          <button
            type="button"
            class="px-4 py-2 text-sm"
            @click="$emit('update:modelValue', false)"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean,
  title: string
}>()
</script>
