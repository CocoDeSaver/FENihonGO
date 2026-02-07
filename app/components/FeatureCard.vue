<template>
  <div
    class="rounded-3xl p-8 text-left
           shadow-lg hover:-translate-y-2 transition
           bg-white"
  >
    <div
      class="w-14 h-14 rounded-2xl mb-6
             flex items-center justify-center
             bg-white shadow"
    >
      <img
        :src="icon"
        alt=""
        class="w-10 h-10 object-contain"
      />
    </div>

    <h3 class="text-xl font-bold text-[#320001]">
      {{ title }}
    </h3>

    <p class="mt-3 text-gray-600">
      {{ desc }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  desc: String
})
</script>
