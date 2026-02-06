export type UserSettings = {
  focus_duration: number
}

export type Gamification = {
  level: number
  gold: number
  total_xp: number
  max_xp: number
}

export type DailyProgress = {
  current: number
  target: number
  is_target_reached: boolean
}

export type AuthUser = {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
  avatar?: string
  gamification?: Gamification
  daily_progress?: DailyProgress
  settings?: UserSettings
}
