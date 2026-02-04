export type UserProfile = {
  name: string
  avatar: string | null
  gamification: {
    level: number
    gold: number
  }
  settings: {
    focus_duration: number
  }
}

export const useUser = () => {
  const profile = useState<UserProfile | null>('user-profile', () => null)

  const fetchProfile = async () => {
    const api = useApi()

    const res = await api<{ data: UserProfile }>('/user')
    profile.value = res.data
  }

  return {
    profile,
    fetchProfile,
  }
}
