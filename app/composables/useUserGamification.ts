export type UserGamification = {
  level: number
  current_exp: number
  gold: number
  daily_exp_target: number
}

export const useUserGamification = () => {
  const gamification = useState<UserGamification | null>(
    'user_gamification',
    () => null
  )

  return {
    gamification
  }
}
