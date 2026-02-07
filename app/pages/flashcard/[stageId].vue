<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">

    <div class="w-full max-w-xl space-y-6">

      <!-- FLASHCARD -->
      <FlashcardItem
        v-if="currentCard"
        :card="currentCard"
        :showAnswer="showAnswer"
        @toggle="toggle"
      />

      <!-- EMPTY -->
      <p
        v-else-if="!loading"
        class="text-gray-500 text-center"
      >
        Belum ada materi
      </p>

      <!-- NAVIGATION -->
      <div class="flex justify-between items-center">
        <button
          class="px-4 py-2 border rounded transition"
          :class="index === 0
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:bg-gray-200'"
          :disabled="index === 0"
          @click="prev"
        >
          ← Prev
        </button>

        <button
          class="px-4 py-2 border rounded transition"
          :class="index >= flashcards.length - 1
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:bg-gray-200'"
          :disabled="index >= flashcards.length - 1"
          @click="next"
        >
          Next →
        </button>
      </div>

      <!-- COUNTER -->
      <p class="text-sm text-center text-gray-500">
        {{ index + 1 }} / {{ flashcards.length }}
      </p>

    </div>

  </div>
</template>

<script setup lang="ts">
import FlashcardItem from '~/components/course/FlashcardItem.vue'
import { useCourse } from '~/composables/useCourse'
import { useRoute } from 'vue-router'

const route = useRoute()
const stageId = Number(route.params.stageId)

const { flashcards, loading, fetchFlashcards } = useCourse()

/**
 * STATE
 */
const index = ref(0)
const showAnswer = ref(false)

/**
 * COMPUTED
 */
const currentCard = computed(() =>
  flashcards.value[index.value] || null
)

/**
 * ACTIONS
 */
const toggle = () => {
  showAnswer.value = !showAnswer.value
}

const next = () => {
  if (index.value < flashcards.value.length - 1) {
    index.value++
    showAnswer.value = false
  }
}

const prev = () => {
  if (index.value > 0) {
    index.value--
    showAnswer.value = false
  }
}

/**
 * FETCH FLASHCARDS BY STAGE
 */
onMounted(() => {
  if (!isNaN(stageId)) {
    fetchFlashcards(stageId)
  }
})
</script>
