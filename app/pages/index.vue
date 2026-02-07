<template>
  <div class="overflow-hidden">

    <!-- HERO & SECTION 2-->
    <HeroSection />

    <!-- SECTION 3 : STEPS -->
    <section
      class="relative py-32
             bg-gradient-to-r from-[#8C0402] to-[#E81509]"
    >
      <div class="max-w-7xl mx-auto px-6 text-center text-white">
        <SectionHeader dark desc="It's super easy to get started 🚀">
          Start Your Journey in 3 Simple Steps
        </SectionHeader>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <StepsCard
            v-for="step in steps"
            :key="step.no"
            :no="step.no"
            :title="step.title"
            :desc="step.desc"
          />
        </div>

        <NuxtLink to="/register">
          <BaseButton variant="light" size="lg" class="mt-16">
            Get Started Free ❤️
          </BaseButton>
        </NuxtLink>
      </div>
    </section>

    <!-- SECTION 4 : FINAL CTA -->
    <section class="py-32 bg-white text-center">
      <SectionHeader desc="Join thousands of learners and turn studying into an adventure">
        Ready to Master Kanji the Fun Way?
      </SectionHeader>

      <div class="mt-10 flex justify-center gap-4">
        <NuxtLink to="/register">
          <BaseButton size="lg">
            Start Free
          </BaseButton>
        </NuxtLink>

        <NuxtLink to="/login">
          <BaseButton variant="outline" size="lg">
            Login
          </BaseButton>
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
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
