<template>
  <div class="space-y-6">
    <h1 class="text-xl font-semibold">Flashcards</h1>

    <form @submit.prevent="create" class="flex gap-2">
      <input v-model="form.kanji" placeholder="Kanji" class="input w-24" />
      <input v-model="form.romaji" placeholder="Romaji" class="input" />
      <input v-model="form.meaning" placeholder="Meaning" class="input" />
      <input type="file" @change="e => form.audio = e.target.files[0]" />
      <button class="btn">Add</button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
const { form: sendForm } = useAdminApi()

const form = reactive({
  stage_id: 1,
  kanji: '',
  romaji: '',
  meaning: '',
  audio: null
})

const create = async () => {
  const fd = new FormData()
  Object.entries(form).forEach(([k, v]) => v && fd.append(k, v))
  await sendForm('/admin/flashcards', fd)
}
</script>
