export const useCourse = () => {
  const api = useApi()

  const stages = ref<any[]>([])
  const flashcards = ref<any[]>([])
  const loading = ref(false)

  const fetchStages = async () => {
    loading.value = true
    try {
      const res = await api<{ data: any[] }>('/stages')
      stages.value = res.data ?? []
      return stages.value
    } finally {
      loading.value = false
    }
  }

  const fetchFlashcards = async (stageId: number) => {
    loading.value = true
    try {
      const res = await api<{ data: any[] }>(
        `/flashcards?stage_id=${stageId}`
      )
      flashcards.value = res.data ?? []
      return flashcards.value
    } finally {
      loading.value = false
    }
  }

  return {
    stages,
    flashcards,
    loading,
    fetchStages,
    fetchFlashcards
  }
}
