export const useCourse = () => {
  const api = useApi()

  const stages = ref<any[]>([])
  const flashcards = ref<any[]>([])
  const selectedStageId = ref<number | null>(null)
  const loading = ref(false)

  const fetchStages = async () => {
    loading.value = true
    try {
      const res = await api<{ data: any[] }>('/stages')
      stages.value = res.data ?? []   // ✅ PENTING
    } finally {
      loading.value = false
    }
  }

  const fetchFlashcards = async (stageId: number) => {
    loading.value = true
    selectedStageId.value = stageId
    try {
      const res = await api<{ data: any[] }>(`/flashcards?stage_id=${stageId}`)
      flashcards.value = res.data ?? []  // ✅ PENTING
    } finally {
      loading.value = false
    }
  }

  return {
    stages,
    flashcards,
    selectedStageId,
    loading,
    fetchStages,
    fetchFlashcards
  }
}
