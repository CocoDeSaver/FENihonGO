<template>
  <div class="max-w-xl mx-auto space-y-6">

    <!-- Flashcard -->
    <FlashcardItem
      v-if="currentCard"
      :card="currentCard"
      :showAnswer="showAnswer"
      @toggle="toggle"
    />

    <p v-else class="text-gray-500 text-center">
      Belum ada materi
    </p>

    <!-- Navigation -->
    <div class="flex justify-between">
      <button
        class="px-4 py-2 border rounded"
        :disabled="index === 0"
        @click="prev"
      >
        ← Prev
      </button>

      <button
        class="px-4 py-2 border rounded"
        :disabled="index >= flashcards.length - 1"
        @click="next"
      >
        Next →
      </button>
    </div>

    <!-- Progress -->
    <p class="text-sm text-center text-gray-500">
      {{ index + 1 }} / {{ flashcards.length }}
    </p>

  </div>
</template>

<script setup lang="ts">
import FlashcardItem from '~/components/course/FlashcardItem.vue'
import { useCourse } from '~/composables/useCourse'

const { flashcards, fetchFlashcards } = useCourse()

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
 * FETCH DATA (contoh stage id = 1)
 */
onMounted(() => {
  fetchFlashcards(1)
})
</script>
