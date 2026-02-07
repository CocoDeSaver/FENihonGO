<template>
  <section
    class="relative overflow-hidden
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

    <!-- ================= HERO ================= -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-6
            pt-24 lg:pt-28
            grid grid-cols-1 lg:grid-cols-2
            gap-14 items-center"
    >
      <!-- LEFT -->
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
            <BaseButton>Main Course</BaseButton>
          </NuxtLink>

          <NuxtLink to="/minigames">
            <BaseButton variant="outline">Mini Games</BaseButton>
          </NuxtLink>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="relative flex justify-center">
        <div
          class="relative z-10 w-72 h-80 rounded-3xl
                 flex items-center justify-center
                 overflow-hidden animate-floatWiggle"
        >
          <img
            src="/images/mainCard.png"
            alt="Main Card"
            class="w-full h-full object-contain"
          />
        </div>

        <div class="absolute -left-1 top-24 w-14 h-14 animate-float">
          <img src="/images/icon1.png" class="w-full h-full object-cover" />
        </div>

        <div class="absolute -right-6 top-12 w-14 h-14 animate-float">
          <img src="/images/icon2.png" class="w-full h-full object-contain" />
        </div>

        <div class="absolute right-10 bottom-16 w-14 h-14 animate-float">
          <img src="/images/icon3.png" class="w-full h-full object-contain" />
        </div>
      </div>
    </div>

    <!-- ================= WHY / FEATURES ================= -->
    <div class="relative z-10 max-w-7xl mx-auto mt-20 px-6 pb-32 text-center">
      <SectionHeader desc="We transform kanji learning into an exciting adventure">
        Learning That Feels Like
        <span class="text-[#E81509]"><br />Playing Your Favorite Game</span>
      </SectionHeader>

      <p class="max-w-xl mx-auto mt-6 text-gray-600">
        Everything below is designed to keep you playing —
        not forcing you to study.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        <FeatureCard
          v-for="item in features"
          :key="item.title"
          :icon="item.icon"
          :title="item.title"
          :desc="item.desc"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const kanji = ['火', '日', '学', '後']

const features = [
  { title: 'Fun Mini Games', desc: '50+ interactive games that feel like playing.', icon: '/images/f2.png' },
  { title: 'Earn EXP & Level Up', desc: 'Progress through levels as you master kanji.', icon: '/images/f3.png' },
  { title: 'Community', desc: 'Compete and learn with thousands of learners.', icon: '/images/f4.png' },
  { title: 'Achievements & Rewards', desc: 'Unlock badges and earn rewards for milestones.', icon: '/images/f5.png' },
  { title: 'Personalized Learning', desc: 'Adaptive lessons tailored to your pace.', icon: '/images/f6.png' },
  { title: 'Quick Progress', desc: 'See results fast with proven methodology.', icon: '/images/f7.png' }
]
</script>
