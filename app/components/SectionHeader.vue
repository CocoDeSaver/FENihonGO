<template>
  <div :class="wrapperClass">
    <!-- Badge (optional) -->
    <span
      v-if="badge"
      class="inline-flex items-center gap-2
             px-5 py-2 rounded-full
             text-sm font-semibold mb-6"
      :class="badgeClass"
    >
      {{ badge }}
    </span>

    <!-- Title -->
    <h2
      class="text-4xl lg:text-5xl font-extrabold
             tracking-tight"
      :class="titleClass"
    >
      <slot />
    </h2>

    <!-- Description -->
    <p
      v-if="desc"
      class="mt-6 max-w-2xl text-gray-600"
      :class="descClass"
    >
      {{ desc }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  badge: String,
  desc: String,
  align: {
    type: String,
    default: 'center' // center | left
  },
  dark: {
    type: Boolean,
    default: false
  }
})

const wrapperClass = computed(() =>
  props.align === 'left'
    ? 'text-left'
    : 'text-center'
)

const titleClass = computed(() =>
  props.dark
    ? 'text-white'
    : 'text-[#320001]'
)

const descClass = computed(() =>
  props.dark
    ? 'text-white/80 mx-auto'
    : 'mx-auto'
)

const badgeClass = computed(() =>
  props.dark
    ? 'bg-white text-[#E81509]'
    : 'bg-[#E81509] text-white'
)
</script>
