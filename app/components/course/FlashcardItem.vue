<template>
  <div
    class="[perspective:1200px] cursor-pointer"
    @click="$emit('toggle')"
  >
    <div
      class="
        relative h-80 w-full
        transition-transform duration-600 ease-in-out
        [transform-style:preserve-3d]
      "
      :class="showAnswer && '[transform:rotateX(180deg)]'"
    >
      <!-- FRONT -->
      <div
        class="
          absolute inset-0
          flex items-center justify-center text-center
          rounded-2xl shadow-xl
          bg-gradient-to-br from-white to-gray-100
          text-gray-900
          [backface-visibility:hidden]
        "
      >
        <p class="text-7xl font-bold">
          {{ card.kanji }}
        </p>
      </div>

      <!-- BACK -->
      <div
        class="
          absolute inset-0
          flex items-center justify-center text-center
          rounded-2xl shadow-xl
          bg-gradient-to-br from-[#FF6C64] to-[#E81509]
          text-white
          [transform:rotateX(180deg)]
          [backface-visibility:hidden]
        "
      >
        <div class="space-y-3 px-6">
          <p class="text-2xl font-semibold">
            {{ card.romaji }}
          </p>
          <p class="text-lg">
            {{ card.meaning }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  card: any
  showAnswer: boolean
}>()

defineEmits<{
  (e: 'toggle'): void
}>()
</script>
