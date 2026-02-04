<template>
  <section
    class="relative overflow-hidden min-h-screen
           bg-gradient-to-br from-[#FFF5F4] via-white to-[#FFEDEB]"
  >
    <!-- Background accents -->
    <div
      class="absolute -top-32 -left-32 w-[500px] h-[500px]
             bg-[#E81509]/10 rounded-full blur-3xl"
    />
    <div
      class="absolute bottom-0 right-0 w-[400px] h-[400px]
             bg-[#E81509]/10 rounded-full blur-3xl"
    />

    <div
      class="relative z-10 max-w-7xl mx-auto px-6
             pt-20 lg:pt-24
             grid grid-cols-1 lg:grid-cols-2
             gap-14 items-center"
    >
      <div>
        <span
          class="inline-flex items-center gap-2 px-4 py-2
                 rounded-full border border-[#E81509]
                 text-[#E81509] text-sm font-semibold mb-6"
        >
          🔥 Best Japanese Learning Platform
        </span>

        <h1
          class="text-5xl lg:text-6xl font-extrabold leading-tight
                 text-[#320001]"
        >
          <span class="text-[#E81509]">Master Kanji</span><br />
          Through<br />
          Games!
        </h1>

        <!-- Kanji -->
        <div class="flex gap-3 mt-6">
          <span
            v-for="k in kanji"
            :key="k"
            class="w-12 h-12 flex items-center justify-center
                   rounded-xl border-2 border-[#E81509]
                   text-[#E81509] font-bold text-lg
                   bg-white shadow-sm"
          >
            {{ k }}
          </span>
        </div>

        <p class="mt-6 max-w-xl text-gray-600">
          Turn your Japanese learning journey into an epic adventure! 🚀
          Collect EXP, unlock achievements, and master 100+ kanji through games.
        </p>

        <!-- CTA -->
        <div class="flex flex-wrap gap-4 mt-10">
          <button
            class="flex items-center gap-2 px-6 py-3 rounded-xl
                   bg-gradient-to-r from-[#E81509] to-[#320001]
                   text-white font-semibold shadow-lg
                   hover:opacity-90 transition"
          >
            Main Course
          </button>

          <button
            class="flex items-center gap-2 px-6 py-3 rounded-xl
                   border-2 border-[#E81509]
                   text-[#E81509]
                   hover:bg-[#E81509] hover:text-white
                   font-semibold transition"
          >
            Mini Games
          </button>
        </div>
      </div>

      <div class="relative flex justify-center">
        <!-- Main Card Image -->
        <div
          class="relative z-10 w-72 h-80 rounded-3xl
                 flex items-center justify-center overflow-hidden animate-floatWiggle"
        >
          <img
            src="/images/mainCard.png"
            alt="Main Card"
            class="w-full h-full object-contain"
          />
        </div>

        <!-- Floating Icons -->
        <div
          class="absolute -left-1 top-24 w-14 h-14 flex items-center justify-center animate-float"
        >
          <img
            src="/images/icon1.png"
            alt="Icon 1"
            class="w-full h-full object-cover"
          />
        </div>

        <div
          class="absolute -right-6 top-12 w-14 h-14 flex items-center justify-center animate-float"
        >
          <img
            src="/images/icon2.png"
            alt="Icon 2"
            class="w-full h-full object-contain"
          />
        </div>

        <div
          class="absolute right-10 bottom-16 w-14 h-14 flex items-center justify-center animate-float"
        >
          <img
            src="/images/icon3.png"
            alt="Icon 3"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2 -->
  <section class="relative overflow-hidden min-h-screen" >
    <div>
      section 2
    </div>
  </section>
</template>

<script setup>
const kanji = ['火', '日', '学', '後']

</script>
