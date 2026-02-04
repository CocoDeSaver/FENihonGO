<template>
  <div class="min-h-screen flex items-center justify-center bg-white p-6">
    <div
      class="w-full max-w-6xl h-[700px] flex rounded-3xl overflow-hidden shadow-xl"
    >
      <div
        class="hidden md:block w-[60%] bg-gray-200 bg-cover bg-center"
        style="background-image: url('/images/SideAuth.png')"
/>

      <div
        class="w-full md:w-[40%]
               bg-gradient-to-br from-[#E81509] to-[#320001]
               text-white flex items-center justify-center px-10"
      >
        <Transition name="auth" mode="out-in">
          <NuxtPage />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style>
.auth-enter-active,
.auth-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.auth-enter-from,
.auth-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
