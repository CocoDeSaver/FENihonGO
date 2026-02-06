// composables/usePomodoro.ts
export const usePomodoro = () => {
  const isRunning = ref(false)
  const duration = ref(25 * 60) // default 25 menit
  const remaining = ref(25 * 60)
  const intervalId = ref<NodeJS.Timeout | null>(null)
  const lastResult = ref<any>(null)

  const api = useApi()

  const startPomodoro = async () => {
    if (isRunning.value) return

    await api('/pomodoro/start', { method: 'POST' })

    isRunning.value = true
    remaining.value = duration.value

    intervalId.value = setInterval(() => {
      remaining.value--

      if (remaining.value <= 0) {
        stopPomodoro('completed')
      }
    }, 1000)
  }

  const stopPomodoro = async (
    status: 'completed' | 'interrupted'
  ) => {
    if (!isRunning.value) return

    if (intervalId.value) {
      clearInterval(intervalId.value)
      intervalId.value = null
    }

    isRunning.value = false

    const res = await api('/pomodoro/stop', {
      method: 'POST',
      body: { status },
    })

    lastResult.value = (res as any)?.data
  }

  const resetPomodoro = () => {
    if (intervalId.value) clearInterval(intervalId.value)
    intervalId.value = null
    isRunning.value = false
    remaining.value = duration.value
    lastResult.value = null
  }

  return {
    isRunning,
    remaining,
    duration,
    lastResult,
    startPomodoro,
    stopPomodoro,
    resetPomodoro,
  }
}
