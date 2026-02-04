<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
import AuthCard from '~/components/auth/AuthCard.vue'

definePageMeta({
  layout: 'auth'
})

const { login } = useAuth()

const form = reactive({
  email: '',
  password: '',
})

const loading = ref(false)
const error = ref('')
const showPassword = ref(false)

const submit = async () => {
  error.value = ''
  loading.value = true

  try {
    await login(form)
  } catch (e: any) {
    error.value = e?.data?.message || 'Login gagal'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <AuthCard
    title="Welcome Back to NihonGO!"
    subtitle="Turn your  japanese learning journey
into an epic adventure!"
  >
    <form @submit.prevent="submit" class="space-y-4">
      <!-- Email -->
      <div>
        <label class="text-sm text-gray-600">Email</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="your@email.com"
          class="w-full mt-1 px-4 py-3 border rounded-md
                 focus:ring-2 focus:ring-[#E81509]/40
                 focus:border-[#E81509] text-gray-800 outline-none"
        />
      </div>

      <!-- Password -->
      <div>
        <label class="text-sm text-gray-600">Password</label>

        <div class="relative mt-1">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
            placeholder="••••••••"
            class="w-full px-4 py-3 pr-10 border rounded-md
                   focus:ring-2 focus:ring-[#E81509]/40
                   focus:border-[#E81509] text-gray-800 outline-none"
          />

          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-3 top-1/2 -translate-y-1/2
                   text-gray-400 hover:text-[#E81509]"
          >
            {{ showPassword ? '🙈' : '👁️' }}
          </button>
        </div>
      </div>

      <!-- Error -->
      <p v-if="error" class="text-sm text-red-600">
        {{ error }}
      </p>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-[#E81509] text-white py-3 rounded-md
               font-medium transition
               hover:bg-[#c51208]
               disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ loading ? 'Loading...' : 'Login' }}
      </button>

      <!-- Register link -->
      <p class="text-sm text-center text-gray-500">
        Don't have an account?
        <NuxtLink
          to="/register"
          class="text-[#E81509] font-medium hover:underline"
        >
          Sign Up
        </NuxtLink>
      </p>
    </form>
  </AuthCard>
</template>
