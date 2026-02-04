<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
import AuthCard from '~/components/auth/AuthCard.vue'

definePageMeta({
  layout: 'auth',
})

const { register } = useAuth()

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const loading = ref(false)
const error = ref('')

const submit = async () => {
  error.value = ''

  if (form.password !== form.password_confirmation) {
    error.value = 'Password dan konfirmasi tidak sama'
    return
  }

  loading.value = true
  try {
    await register(form)
  } catch (e: any) {
    error.value = e?.data?.message || 'Register gagal'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <AuthCard
    title="Welcome to NihonGO!"
    subtitle="Create your account and start learning Japanese"
  >
    <!-- Username -->
    <div class="mb-4">
      <label class="block mb-2 text-sm text-[#320001]">
        Username
      </label>
      <input
        v-model="form.name"
        placeholder="username"
        class="w-full px-4 py-3 rounded-xl
               bg-white text-gray-800
               placeholder:text-gray-400
               border border-gray-200
               focus:outline-none focus:ring-2 focus:ring-[#E81509]/40"
      />
    </div>

    <!-- Email -->
    <div class="mb-4">
      <label class="block mb-2 text-sm text-[#320001]">
        Email
      </label>
      <input
        v-model="form.email"
        placeholder="your@email.com"
        class="w-full px-4 py-3 rounded-xl
               bg-white text-gray-800
               placeholder:text-gray-400
               border border-gray-200
               focus:outline-none focus:ring-2 focus:ring-[#E81509]/40"
      />
    </div>

    <!-- Password -->
    <div class="mb-4 relative">
      <label class="block mb-2 text-sm text-[#320001]">
        Password
      </label>
      <input
        :type="showPassword ? 'text' : 'password'"
        v-model="form.password"
        placeholder="password"
        class="w-full px-4 py-3 pr-10 rounded-xl
               bg-white text-gray-800
               placeholder:text-gray-400
               border border-gray-200
               focus:outline-none focus:ring-2 focus:ring-[#E81509]/40"
      />
      <button
        type="button"
        class="absolute right-3 top-[42px] text-gray-400 hover:text-gray-600"
        @click="showPassword = !showPassword"
      >
        👁
      </button>
    </div>

    <!-- Confirm Password -->
    <div class="mb-6 relative">
      <label class="block mb-2 text-sm text-[#320001]">
        Confirm Password
      </label>
      <input
        :type="showConfirmPassword ? 'text' : 'password'"
        v-model="form.password_confirmation"
        placeholder="confirm password"
        class="w-full px-4 py-3 pr-10 rounded-xl
               bg-white text-gray-800
               placeholder:text-gray-400
               border border-gray-200
               focus:outline-none focus:ring-2 focus:ring-[#E81509]/40"
      />
      <button
        type="button"
        class="absolute right-3 top-[42px] text-gray-400 hover:text-gray-600"
        @click="showConfirmPassword = !showConfirmPassword"
      >
        👁
      </button>
    </div>

    <!-- Error -->
    <p v-if="error" class="text-sm text-red-600 mb-4">
      {{ error }}
    </p>

    <!-- Action -->
    <button
      @click="submit"
      :disabled="loading"
      class="w-full bg-[#E81509] text-white
             font-semibold py-3 rounded-xl
             hover:bg-[#d01408]
             disabled:opacity-60
             transition"
    >
      {{ loading ? 'Loading...' : 'Register' }}
    </button>

    <!-- Footer -->
    <p class="text-sm text-center text-gray-500 mt-4">
      Already have an account?
      <NuxtLink
        to="/login"
        class="text-[#E81509] font-semibold hover:underline"
      >
        Log In
      </NuxtLink>
    </p>
  </AuthCard>
</template>
