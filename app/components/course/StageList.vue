<template>
  <div class="space-y-4">
    <button
      v-for="(stage, index) in stages"
      :key="stage.id"
      class="group w-full text-left
             rounded-2xl p-5
             bg-white
             border border-[#E81509]/10
             shadow-sm
             hover:shadow-lg hover:-translate-y-1
             transition-all duration-300
             animate-stageIn"
      :style="{ animationDelay: `${index * 80}ms` }"
      @click="$emit('select', stage.id)"
    >
      <div class="flex items-center gap-4">

        <!-- LEVEL NUMBER -->
        <div
          class="w-12 h-12 rounded-xl
                 bg-[#E81509]/10
                 flex items-center justify-center
                 font-extrabold text-[#E81509]"
        >
          {{ String(index + 1).padStart(2, '0') }}
        </div>

        <!-- CONTENT -->
        <div class="flex-1">
          <h3
            class="font-semibold text-[#320001]
                   group-hover:text-[#E81509]
                   transition"
          >
            {{ stage.name }}
          </h3>

          <p class="text-xs text-gray-500 mt-1">
            Tap to start this stage
          </p>
        </div>

        <!-- ARROW -->
        <div
          class="text-[#E81509]/40
                 group-hover:translate-x-1
                 group-hover:text-[#E81509]
                 transition"
        >
          →
        </div>

      </div>
    </button>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  stages: any[]
}>()

defineEmits<{
  (e: 'select', id: number): void
}>()
</script>
