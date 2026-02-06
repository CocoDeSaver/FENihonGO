import type { AuthUser } from '~/types/user'

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

  const isLoggedIn = computed(() => !!token.value && !!user.value)

  /**
   * FETCH CURRENT USER (SINGLE SOURCE)
   */
  const fetchUser = async () => {
    if (!token.value) return null

    try {
      const api = useApi()
      const res = await api<{ data: AuthUser }>('/user')
      user.value = res.data
      return user.value
    } catch (e) {
      token.value = null
      user.value = null
      return null
    }
  }

  /**
   * LOGIN
   */
  const login = async (payload: LoginPayload) => {
    const api = useApi()

    const res = await api<{
      data: {
        user: AuthUser
        access_token: string
      }
    }>('/login', {
      method: 'POST',
      body: payload,
    })

    token.value = res.data.access_token
    user.value = res.data.user

    await navigateTo(
      user.value?.role === 'admin'
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
      }
    }>('/register', {
      method: 'POST',
      body: payload,
    })

    token.value = res.data.access_token
    user.value = res.data.user

    await fetchUser()
    await navigateTo('/')
  }

 /**
 * LOGOUT
 */
const logout = async () => {
  if (!token.value) {
    user.value = null
    return navigateTo('/login')
  }

  try {
    const api = useApi()

    await api('/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })
  } catch (e) {
    // optional: console.error('Logout failed', e)
  } finally {
    // WAJIB bersih, apapun hasil API
    token.value = null
    user.value = null
    navigateTo('/login')
  }
}

  /**
   * INIT (dipanggil dari app.vue / middleware)
   */
  const initAuth = async () => {
    if (user.value || !token.value) return
    await fetchUser()
  }

  return {
    user,
    token,
    isLoggedIn,
    login,
    register,
    logout,
    initAuth,
    fetchUser,
  }
}
