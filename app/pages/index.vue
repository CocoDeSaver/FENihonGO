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
         <NuxtLink to="/maincourse">
           <button
             class="flex items-center gap-2 px-6 py-3 rounded-xl
                    bg-gradient-to-r from-[#E81509] to-[#320001]
                    text-white font-semibold shadow-lg
                    hover:opacity-90 transition"
           >
             Main Course
           </button>
         </NuxtLink>

          <NuxtLink to="/minigames">
            <button
              class="flex items-center gap-2 px-6 py-3 rounded-xl
                     border-2 border-[#E81509]
                     text-[#E81509]
                     hover:bg-[#E81509] hover:text-white
                     font-semibold transition"
            >
              Mini Games
            </button>
          </NuxtLink>
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
  <section class="relative py-32 bg-[#FFF7F6]">
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
    /> 
    <div class="max-w-7xl mx-auto px-6 text-center">
      
      <!-- Badge -->
      <span
        class="inline-flex items-center gap-2 px-5 py-2
              rounded-full bg-[#E81509] text-white
              text-sm font-semibold mb-6"
      >
        ✨ WHY NIHONGO?
      </span>

      <h2 class="text-4xl lg:text-5xl font-extrabold text-[#320001]">
        Learning That Feels Like<br />
        <span class="text-[#E81509]">Playing Your Favorite Game</span>
      </h2>

      <p class="mt-6 max-w-2xl mx-auto text-gray-600">
        We transform kanji learning into an exciting adventure with rewards,
        challenges, and friendly competition.
      </p>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        <div
          v-for="item in features"
          :key="item.title"
          class="rounded-3xl p-8 text-left
                shadow-lg hover:-translate-y-2 transition"
                :class="item.bg"
        >
          <div
            class="w-14 h-14 rounded-2xl mb-6
                  flex items-center justify-center"
          >
            <img :src="item.icon" class="w-7 h-7" />
          </div>

          <h3 class="text-xl font-bold text-[#320001]">
            {{ item.title }}
          </h3>

          <p class="mt-3 text-gray-600">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3: STEPS -->
<section
  class="relative py-32
         bg-gradient-to-r from-[#8C0402] to-[#E81509]"
>
  <div class="max-w-7xl mx-auto px-6 text-center text-white">
    <h2 class="text-4xl lg:text-5xl font-extrabold">
      Start Your Journey in 3 Simple Steps
    </h2>

    <p class="mt-4 text-white/80">
      It's super easy to get started 🚀
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
      <div
        v-for="step in steps"
        :key="step.title"
        class="bg-white/10 backdrop-blur
               rounded-3xl p-10 border border-white/20"
      >
        <div
          class="w-14 h-14 mx-auto mb-6
                 rounded-full bg-white text-[#E81509]
                 flex items-center justify-center
                 font-extrabold text-xl"
        >
          {{ step.no }}
        </div>

        <h3 class="text-xl font-bold">
          {{ step.title }}
        </h3>

        <p class="mt-3 text-white/80">
          {{ step.desc }}
        </p>
      </div>
    </div>

    <NuxtLink to="/register">
      <button
        class="mt-16 px-10 py-4 rounded-xl
               bg-white text-[#E81509]
               font-bold shadow-xl
               hover:scale-105 transition"
      >
        Get Started Free ❤️
      </button>
    </NuxtLink>
  </div>
</section>

<!-- SECTION 4: FINAL CTA -->
<section class="py-32 bg-white text-center">
  <h2 class="text-4xl font-extrabold text-[#320001]">
    Ready to Master Kanji the Fun Way?
  </h2>

  <p class="mt-4 text-gray-600 max-w-xl mx-auto">
    Join thousands of learners and turn studying into an adventure.
  </p>

  <div class="mt-10 flex justify-center gap-4">
    <NuxtLink to="/register">
      <button
        class="px-8 py-4 rounded-xl
               bg-gradient-to-r from-[#E81509] to-[#320001]
               text-white font-semibold shadow-lg"
      >
        Start Free
      </button>
    </NuxtLink>

    <NuxtLink to="/login">
      <button
        class="px-8 py-4 rounded-xl
               border-2 border-[#E81509]
               text-[#E81509]
               font-semibold hover:bg-[#E81509] hover:text-white transition"
      >
        Login
      </button>
    </NuxtLink>
  </div>
</section>


</template>

<script setup>
const kanji = ['火', '日', '学', '後']
const features = [
  {
    title: 'Fun Mini Games',
    desc: '50+ interactive games that feel like playing.',
    icon: '/images/f2.png',
    bg: 'bg-blue-100'
  },
  {
    title: 'Earn EXP & Level Up',
    desc: 'Progress through levels as you master kanji.',
    icon: '/images/f3.png',
    bg: 'bg-pink-100'
  },
  {
    title: 'Community',
    desc: 'Compete and learn with thousands of learners.',
    icon: '/images/f4.png',
    bg: 'bg-green-100'
  },
  {
    title: 'Achievements & Rewards',
    desc: 'Unlock badges and earn rewards for milestones.',
    icon: '/images/f5.png',
    bg: 'bg-yellow-100'
  },
  {    title: 'Personalized Learning',
    desc: 'Adaptive lessons tailored to your pace.',
    icon: '/images/f6.png',
    bg: 'bg-red-100'
  },
  {
    title: 'Quick Progress',
    desc: 'See results fast with proven methodology.',
    icon: '/images/f7.png',
    bg: 'bg-indigo-100'
  }
]

const steps = [
  {
    no: '01',
    title: 'Create Account',
    desc: 'Sign up for free and choose your learning path.'
  },
  {
    no: '02',
    title: 'Start Playing',
    desc: 'Play games and earn EXP points.'
  },
  {
    no: '03',
    title: 'Track Progress',
    desc: 'See your growth with detailed analytics.'
  }
]


</script>
