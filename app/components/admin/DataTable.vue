<template>
  <div class="bg-white rounded shadow overflow-x-auto">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th
            v-for="h in headers"
            :key="h.key"
            class="px-4 py-2 text-left font-medium text-gray-600"
          >
            {{ h.label }}
          </th>
          <th v-if="actions" class="px-4 py-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="row in items"
          :key="row.id"
          class="border-t hover:bg-gray-50"
        >
          <td
            v-for="h in headers"
            :key="h.key"
            class="px-4 py-2"
          >
            <slot :name="h.key" :row="row">
              {{ row[h.key] }}
            </slot>
          </td>

          <td v-if="actions" class="px-4 py-2 space-x-2">
            <button
              class="text-blue-600 hover:underline"
              @click="$emit('edit', row)"
            >
              Edit
            </button>
            <button
              class="text-red-600 hover:underline"
              @click="$emit('delete', row)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
interface DataTableProps {
  headers: { label: string; key: string }[];
  items: any[];
  actions?: boolean;
}
defineProps<DataTableProps>();
</script>
