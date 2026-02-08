<template>
  <div class="min-h-screen p-6">

    <!-- START -->
    <GameStart
      v-if="state === 'start'"
      @start="startGame"
    />

    <!-- GAMEPLAY -->
    <GamePlay
      v-else-if="state === 'playing'"
      :stage="stage"
      :quizzes="quizzes"
      :monster="monster"
      @finish="finishGame"
    />

    <!-- RESULT -->
    <GameResult
      v-else-if="state === 'result'"
      :result="result"
      @restart="resetGame"
    />

  </div>
  <NoTicketModal
    v-if="showNoTicketModal"
    @close="showNoTicketModal = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useApi } from '~/composables/useApi'

import GameStart from '~/components/minigame/GameStart.vue'
import GamePlay from '~/components/minigame/GamePlay.vue'
import GameResult from '~/components/minigame/GameResult.vue'
import NoTicketModal from '~/components/minigame/NoTicketModal.vue'

const api = useApi()

/**
 * GAME STATE
 */
const state = ref<'start' | 'playing' | 'result'>('start')

const stage = ref<any>(null)
const quizzes = ref<any[]>([])
const monster = ref<any>(null)
const showNoTicketModal = ref(false)

const result = ref<any>(null)

/**
 * START GAME
 */
const startGame = async (stageId: number) => {
  try {
    const res = await api(`/game/start/${stageId}`) as any

    stage.value = res.data.stage
    quizzes.value = res.data.quizzes
    monster.value = res.data.stage.monster

    state.value = 'playing'
  } catch (err: any) {
    if (
      err?.response?.status === 403 &&
      err?.response?.data?.error_code === 'NO_TICKETS'
    ) {
      showNoTicketModal.value = true
    } else {
      console.error(err)
    }
  }
}


/**
 * FINISH GAME
 */
const finishGame = async (payload: {
  stage_id: number
  score: number
  is_completed: boolean
}) => {
  try {
    const res = await api('/game/finish', {
      method: 'POST',
      body: payload,
    }) as any

    result.value = res.data
    state.value = 'result'
  } catch (err) {
    console.error(err)
  }
}

/**
 * RESET
 */
const resetGame = () => {
  state.value = 'start'
  stage.value = null
  quizzes.value = []
  monster.value = null
  result.value = null
}
</script>
