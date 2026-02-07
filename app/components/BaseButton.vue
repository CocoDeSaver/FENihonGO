<template>
  <component
    :is="as"
    class="inline-flex items-center justify-center gap-2
           rounded-xl font-semibold
           transition-all duration-300
           focus:outline-none focus-visible:ring-2
           focus-visible:ring-offset-2 focus-visible:ring-[#E81509]"
    :class="[sizeClass, variantClass]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary' // primary | outline | ghost | light
  },
  size: {
    type: String,
    default: 'md' // sm | md | lg
  }
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'outline':
      return `
        border-2 border-[#E81509]
        text-[#E81509]
        hover:bg-[#E81509] hover:text-white
      `
    case 'ghost':
      return `
        text-[#E81509]
        hover:bg-[#E81509]/10
      `
    case 'light':
      return `
        bg-white text-[#E81509]
        shadow hover:shadow-lg
        hover:-translate-y-0.5
      `
    default:
      return `
        bg-gradient-to-r from-[#E81509] to-[#320001]
        text-white shadow-lg
        hover:opacity-90
      `
  }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-10 py-4 text-lg'
    default:
      return 'px-6 py-3'
  }
})
</script>
