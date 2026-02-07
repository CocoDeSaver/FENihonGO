<template>
  <div
    class="group relative
           bg-white/10 backdrop-blur
           rounded-3xl p-10
           border border-white/20
           transition-all duration-300
           hover:bg-white/15 hover:-translate-y-2"
  >
    <!-- Step Number -->
    <div
      class="w-14 h-14 mx-auto mb-6
             rounded-full bg-white
             text-[#E81509]
             flex items-center justify-center
             font-extrabold text-xl
             group-hover:scale-110 transition"
    >
      {{ no }}
    </div>

    <!-- Title -->
    <h3 class="text-xl font-bold text-white">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="mt-3 text-white/80 leading-relaxed">
      {{ desc }}
    </p>

    <!-- Subtle glow -->
    <div
      class="absolute inset-0 rounded-3xl
             opacity-0 group-hover:opacity-100
             transition pointer-events-none
             bg-gradient-to-br from-white/20 to-transparent"
    />
  </div>
</template>

<script setup>
defineProps({
  no: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
})
</script>
