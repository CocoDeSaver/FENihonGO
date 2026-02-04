<template>
  <div class="min-h-screen flex bg-gray-100">
    <!-- Sidebar -->
    <AdminSidebar />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <AdminTopbar />

      <main class="p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminSidebar from '@/components/admin/Sidebar.vue'
import AdminTopbar from '@/components/admin/Topbar.vue'
</script>
