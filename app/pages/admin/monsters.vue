<template>
  <div class="space-y-6">
    <h1 class="text-xl font-semibold">Monsters</h1>

    <form @submit.prevent="create" class="flex gap-2">
      <input v-model="form.name" placeholder="Name" class="input" />
      <input v-model.number="form.base_hp" type="number" placeholder="HP" class="input w-24" />
      <input type="file" @change="e => form.image = e.target.files[0]" />
      <button class="btn">Add</button>
    </form>

    <table class="table">
      <tr v-for="m in monsters" :key="m.id">
        <td>{{ m.name }}</td>
        <td>{{ m.base_hp }}</td>
        <td>
          <img :src="m.asset_path" class="h-10" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
const { form: sendForm, json } = useAdminApi()

const monsters = ref([])
const form = reactive({
  name: '',
  base_hp: 100,
  image: null
})

const load = async () => {
  monsters.value = await json('/admin/monsters', null, 'GET')
}

const create = async () => {
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('base_hp', form.base_hp)
  fd.append('image', form.image)

  await sendForm('/admin/monsters', fd)
  await load()
}

onMounted(load)
</script>
