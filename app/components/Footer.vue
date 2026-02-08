<template>
    <!-- RED DIVIDER (same as navbar) -->
    <div class="w-full h-[0.5px] bg-[#E81509]" />

    <footer
        class="relative overflow-hidden
            bg-gradient-to-br from-[#FFF5F4] via-white to-[#FFEDEB]
            pt-24 pb-12"
    >
    <!-- Background accents -->
    <div
      class="absolute -top-32 -left-32 w-[400px] h-[400px]
             bg-[#E81509]/10 rounded-full blur-3xl"
    />
    <div
      class="absolute bottom-0 right-0 w-[300px] h-[300px]
             bg-[#E81509]/10 rounded-full blur-3xl"
    />

    <div
      class="relative z-10 max-w-7xl mx-auto px-6
             grid grid-cols-1 md:grid-cols-3 gap-12"
    >
      <!-- BRAND -->
      <div>
        <div class="flex items-center gap-3">
          <div
            class="w-12 h-12 rounded-xl
                   bg-gradient-to-br from-[#E81509] to-[#320001]
                   flex items-center justify-center
                   text-white font-extrabold text-xl"
          >
            愛
          </div>

          <div>
            <h3 class="text-xl font-extrabold text-[#320001]">
              NihonGO!
            </h3>
            <p class="text-sm text-gray-500">
              Learn • Play • Master
            </p>
          </div>
        </div>

        <p class="mt-6 text-gray-600 max-w-sm">
          Turn learning Japanese into a fun and rewarding adventure.
          Master kanji, level up, and enjoy every step 🚀
        </p>
      </div>

      <!-- LINKS -->
      <div>
        <h4 class="font-bold text-[#320001] mb-4">
          Explore
        </h4>

        <ul class="space-y-3 text-gray-600">
          <li><NuxtLink to="/" class="hover:text-[#E81509] transition">Home</NuxtLink></li>
          <li><NuxtLink to="/maincourse" class="hover:text-[#E81509] transition">Courses</NuxtLink></li>
          <li><NuxtLink to="/minigames" class="hover:text-[#E81509] transition">Mini Games</NuxtLink></li>
          <li><NuxtLink to="/leaderboard" class="hover:text-[#E81509] transition">Leaderboard</NuxtLink></li>
        </ul>
      </div>

      <!-- CTA / SOCIAL -->
      <div>
        <h4 class="font-bold text-[#320001] mb-4">
          Start Your Journey
        </h4>

        <p class="text-gray-600 mb-6">
          Ready to level up your kanji skills?
        </p>

        <NuxtLink to="/register">
          <BaseButton size="sm">
            Get Started Free
          </BaseButton>
        </NuxtLink>

        <!-- Social (placeholder) -->
        <div class="flex gap-4 mt-6">
          <div
            class="w-10 h-10 rounded-full bg-white
                   shadow flex items-center justify-center
                   text-gray-500 hover:text-[#E81509]
                   cursor-pointer transition"
          >
            🌐
          </div>
          <div
            class="w-10 h-10 rounded-full bg-white
                   shadow flex items-center justify-center
                   text-gray-500 hover:text-[#E81509]
                   cursor-pointer transition"
          >
            🐦
          </div>
          <div
            class="w-10 h-10 rounded-full bg-white
                   shadow flex items-center justify-center
                   text-gray-500 hover:text-[#E81509]
                   cursor-pointer transition"
          >
            📸
          </div>
        </div>
      </div>
    </div>

    <!-- BOTTOM -->
    <div
      class="relative z-10 mt-16
             border-t border-[#E81509]/20
             pt-6 text-center text-sm text-gray-500"
    >
      © {{ year }} NihonGO!. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
