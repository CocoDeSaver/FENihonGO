<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-xl mx-auto space-y-4">

      <h1 class="text-xl font-semibold text-gray-800">
        Pilih Materi
      </h1>

      <!-- Loading -->
      <p v-if="loading" class="text-gray-500">
        Memuat materi...
      </p>

      <!-- Stage List -->
      <StageList
        v-else
        :stages="stages"
        @select="goToStage"
      />

      <!-- Empty -->
      <p
        v-if="!loading && stages.length === 0"
        class="text-sm text-gray-500"
      >
        Belum ada materi
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import StageList from '~/components/course/StageList.vue'
import { useCourse } from '~/composables/useCourse'

const { stages, loading, fetchStages } = useCourse()

/**
 * FETCH STAGES
 */
onMounted(() => {
  fetchStages()
})

/**
 * NAVIGATION
 */
const goToStage = (stageId: number) => {
  navigateTo(`/flashcard/${stageId}`)
}
</script>
