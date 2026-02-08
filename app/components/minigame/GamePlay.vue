<template>
  <div class="space-y-6">

    <h2 class="font-semibold">
      Stage: {{ stage.name }}
    </h2>

    <p>
      Monster: {{ monster.name }} (HP: {{ monster.hp }})
    </p>

    <!-- QUIZ -->
    <div v-if="currentQuiz">
      <p>
        {{ currentQuiz.question }}
      </p>

      <button
        class="border px-3 py-1 mt-2"
        @click="answerCorrect"
      >
        Jawab Benar
      </button>
    </div>

    <!-- FINISH -->
    <button
      v-if="isFinished"
      class="border px-4 py-2"
      @click="submit"
    >
      Selesai
    </button>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  stage: any
  quizzes: any[]
  monster: any
}>()

const emit = defineEmits<{
  (e: 'finish', payload: {
    stage_id: number
    score: number
    is_completed: boolean
  }): void
}>()

const index = ref(0)
const score = ref(0)

const currentQuiz = computed(() =>
  props.quizzes[index.value]
)

const isFinished = computed(() =>
  index.value >= props.quizzes.length
)

const answerCorrect = () => {
  score.value += 10
  index.value++
}

const submit = () => {
  emit('finish', {
    stage_id: props.stage.id,
    score: score.value,
    is_completed: score.value > 0,
  })
}
</script>
