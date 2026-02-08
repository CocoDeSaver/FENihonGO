<template>
  <div
    class="min-h-screen overflow-hidden
           bg-gradient-to-br from-[#FFF5F4] via-white to-[#FFEDEB]
           px-6 py-16"
  >
    <div class="max-w-xl mx-auto space-y-10">

      <!-- HEADER -->
      <div class="text-center space-y-3 animate-fadeInUp">
        <span
          class="inline-flex items-center gap-2 px-4 py-2
                 rounded-full bg-[#E81509]/10
                 text-[#E81509] text-sm font-semibold"
        >
          🎮 Course Map
        </span>

        <h1 class="text-3xl font-extrabold text-[#320001]">
          Pilih Materi Belajar
        </h1>

        <p class="text-gray-600 text-sm">
          Selesaikan stage untuk mendapatkan EXP ✨
        </p>
      </div>

      <!-- LOADING -->
      <div
        v-if="loading"
        class="flex flex-col items-center gap-4 mt-12"
      >
        <div
          class="w-10 h-10 rounded-full border-4
                 border-[#E81509]/30 border-t-[#E81509]
                 animate-spin"
        />
        <p class="text-gray-500 text-sm">
          Memuat materi...
        </p>
      </div>

      <!-- STAGE LIST -->
      <div
        v-else
        class="animate-fadeIn"
      >
        <StageList
          :stages="stages"
          @select="goToStage"
        />
      </div>

      <!-- EMPTY STATE -->
      <div
        v-if="!loading && stages.length === 0"
        class="text-center py-16 animate-fadeIn"
      >
        <p class="text-gray-500 text-sm">
          🚧 Belum ada materi tersedia
        </p>
      </div>

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
