<template>
  <div class="space-y-6">
    <h1 class="text-xl font-semibold">Stages</h1>

    <form @submit.prevent="create" class="grid grid-cols-6 gap-2">
      <input v-model="form.name" placeholder="Name" class="input col-span-2" />
      <input v-model.number="form.stage_number" type="number" placeholder="Stage #" class="input" />
      <input v-model.number="form.level_req" type="number" placeholder="Level" class="input" />
      <input type="file" @change="e => form.image = e.target.files[0]" />
      <button class="btn col-span-6">Add</button>
    </form>

    <table class="table">
      <tr v-for="s in stages" :key="s.id">
        <td>{{ s.stage_number }}</td>
        <td>{{ s.name }}</td>
        <td><img :src="s.image_path" class="h-10" /></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
const { form: sendForm, json } = useAdminApi()

const stages = ref([])
const form = reactive({
  chapter_id: 1,
  monster_id: 1,
  name: '',
  stage_number: 1,
  level_req: 1,
  image: null
})

const load = async () => {
  stages.value = await json('/admin/stages', null, 'GET')
}

const create = async () => {
  const fd = new FormData()
  Object.entries(form).forEach(([k, v]) => fd.append(k, v))
  await sendForm('/admin/stages', fd)
  await load()
}

onMounted(load)
</script>
