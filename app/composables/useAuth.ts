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

type RegisterPayload = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export const useAuth = () => {
  const user = useState<AuthUser | null>('auth-user', () => null)

  const token = useCookie<string | null>('token', {
    sameSite: 'strict',
    secure: false,
    path: '/',
  })

  console.log('[useAuth] INIT', {
    token: token.value,
    user: user.value,
    isLoggedIn: !!token.value && !!user.value,
    isClient: process.client,
    isServer: process.server,
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
   * REGISTER
   */
  const register = async (payload: RegisterPayload) => {
    const api = useApi()

    const res = await api<{
      data: {
        user: AuthUser
        access_token: string
        token_type: string
      }
    }>('/register', {
      method: 'POST',
      body: payload,
    })

    const { user: registeredUser, access_token } = res.data

    // simpan token & user (auto login setelah register)
    token.value = access_token
    user.value = registeredUser

    await navigateTo('/')
  }

  /**
   * LOGOUT
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

  const initAuth = async () => {
  if (!token.value || user.value) return

  try {
    const api = useApi()
    const res = await api<{ data: AuthUser }>('/me')
    user.value = res.data
  } catch (e) {
    token.value = null
    user.value = null
  }
}


  return {
    user,
    token,
    isLoggedIn,
    login,
    register,
    logout,
    initAuth,
  }
}
