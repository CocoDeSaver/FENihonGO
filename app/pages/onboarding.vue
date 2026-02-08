<template>
  <div
    class="min-h-screen flex items-center justify-center
           bg-gradient-to-br from-[#FFF5F4] via-white to-[#FFEDEB]
           px-6"
  >
    <div class="w-full max-w-md space-y-8">

      <!-- HEADER -->
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-extrabold text-[#320001]">
          Atur Fokus Belajarmu 🎯
        </h1>
        <p class="text-sm text-gray-500">
          Sesuaikan target dan durasi belajar harianmu
        </p>
      </div>

      <!-- FORM -->
      <div class="bg-white rounded-2xl p-6 shadow space-y-6">

        <!-- TARGET EXP -->
        <div>
          <label class="text-sm font-semibold text-[#320001]">
            Target EXP Harian
          </label>
          <input
            v-model="dailyTargetExp"
            type="number"
            min="50"
            step="50"
            class="mt-2 w-full border rounded-xl px-4 py-2"
          />
        </div>

        <!-- FOCUS DURATION -->
        <div>
          <label class="text-sm font-semibold text-[#320001]">
            Durasi Fokus (Pomodoro)
          </label>

          <div class="flex gap-3 mt-2">
            <button
              v-for="d in [25, 50] as const"
              :key="d"
              class="flex-1 py-3 rounded-xl border font-semibold"
              :class="focusDuration === d
                ? 'bg-[#E81509] text-white'
                : 'bg-white text-gray-600'"
              @click="focusDuration = d"
            >
              {{ d }} menit
            </button>
          </div>
        </div>

        <!-- SUBMIT -->
        <button
          class="w-full py-3 rounded-xl
                 bg-[#E81509] text-white font-bold
                 disabled:opacity-50"
          :disabled="loading"
          @click="submitOnboarding"
        >
          {{ loading ? 'Menyimpan...' : 'Mulai Belajar 🚀' }}
        </button>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApi } from '~/composables/useApi'
import { useRouter } from '#imports'

const api = useApi()
const router = useRouter()

// Form state
const dailyTargetExp = ref(200)
const focusDuration = ref<25 | 50>(25)
const loading = ref(false)

// Submit onboarding
const submitOnboarding = async () => {
  try {
    loading.value = true

    // Submit ke backend
    await api('/onboarding', {
      method: 'POST',
      body: {
        daily_target_exp: dailyTargetExp.value,
        focus_duration: focusDuration.value
      }
    })

    // Update state FE langsung (paling penting)
    const user = useState<any>('auth-user')
    if (!user.value.settings) user.value.settings = {}
    user.value.settings.focus_duration = focusDuration.value
    user.value.settings.daily_target_exp = dailyTargetExp.value

    // Redirect instan sebelum fetch ulang
    router.push('/')

    // Optional: fetch ulang user di background
    api('/user').then((res: any) => user.value = res.data)
  } catch (err) {
    console.error(err)
    alert('Gagal menyimpan preferensi.')
  } finally {
    loading.value = false
  }
}

</script>
