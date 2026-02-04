<template>
  <div class="space-y-6">
    <h1 class="text-xl font-semibold">Quizzes</h1>

    <form @submit.prevent="create" class="space-y-2">
      <input v-model="form.question" class="input w-full" placeholder="Question" />

      <input v-for="(o,i) in form.options" :key="i"
        v-model="form.options[i]" class="input w-full" />

      <input v-model="form.correct_answer" class="input w-full" placeholder="Correct" />
      <button class="btn">Add</button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
const { json } = useAdminApi()

const form = reactive({
  stage_id: 1,
  question: '',
  options: ['', '', '', ''],
  correct_answer: ''
})

const create = async () => {
  await json('/admin/quizzes', form)
}
</script>
