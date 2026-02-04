export type AuthUser = {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
}

type LoginPayload = {
  email: string
  password: string
}

export const useAuth = () => {
  const user = useState<AuthUser | null>('auth-user', () => null)

  const token = useCookie<string | null>('token', {
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })

  const isLoggedIn = computed(() => !!user.value && !!token.value)

  /**
   * LOGIN
   */
  const login = async (payload: LoginPayload) => {
    const api = useApi()

    const res = await api<{
      data: {
        user: AuthUser
        access_token: string
        token_type: string
      }
    }>('/login', {
      method: 'POST',
      body: payload,
    })

    const { user: loggedUser, access_token } = res.data

    token.value = access_token
    user.value = loggedUser

    await navigateTo(
      loggedUser.role === 'admin'
        ? '/admin/admindashboard'
        : '/'
    )
  }

  /**
   * LOGOUT (wajib hit API)
   */
  const logout = async () => {
    const api = useApi()

    try {
      await api('/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
    } finally {
      token.value = null
      user.value = null
      navigateTo('/login')
    }
  }

  return {
    user,
    token,
    isLoggedIn,
    login,
    logout,
  }
}
