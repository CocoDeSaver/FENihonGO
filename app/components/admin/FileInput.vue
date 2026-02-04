<template>
  <div class="space-y-2">
    <input
      type="file"
      :accept="accept"
      @change="onChange"
      class="block text-sm"
    />

    <img
      v-if="preview && type === 'image'"
      :src="preview"
      class="h-20 rounded border"
    />

    <audio
      v-if="preview && type === 'audio'"
      controls
      :src="preview"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: File,
    default: null
  },
  type: {
    type: String,
    required: true,
    validator: (val: string) => ['image', 'audio'].includes(val)
  }
})

const emit = defineEmits(['update:modelValue'])

const accept = computed(() =>
  props.type === 'image'
    ? 'image/png,image/jpeg'
    : 'audio/mpeg,audio/wav'
)

const preview = ref<string | null>(null)

const onChange = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return

  emit('update:modelValue', file)
  preview.value = URL.createObjectURL(file)
}
</script>
