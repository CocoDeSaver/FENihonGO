<template>
  <div class="space-y-6">
    <h1 class="text-xl font-semibold">Chapters</h1>

    <div class="flex gap-2">
      <input v-model="form.title" placeholder="Title" class="input" />
      <input v-model.number="form.chapter_number" type="number" placeholder="No" class="input w-24" />
      <button @click="create" class="btn">Add</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="c in chapters" :key="c.id">
          <td>{{ c.chapter_number }}</td>
          <td>{{ c.title }}</td>
          <td>
            <button @click="remove(c.id)" class="text-red-500">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
const { json } = useAdminApi()

const chapters = ref([])
const form = reactive({ title: '', chapter_number: 1 })

const load = async () => {
  const res = await json('/admin/chapters', null, 'GET')
  chapters.value = Array.isArray(res) ? res : res.data
}


const create = async () => {
  await json('/admin/chapters', form)
  form.title = ''
  await load()
}

const remove = async (id) => {
  await json(`/admin/chapters/${id}`, null, 'DELETE')
  await load()
}

onMounted(load)
</script>
