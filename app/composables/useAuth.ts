type AuthUser = {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
}

export const useAuth = () => {
  const user = useState<AuthUser | null>('auth-user', () => null)

  const login = async (payload: {
  email: string
  password: string
  }) => {
    const api = useApi()

    const res: any = await api('/login', {
      method: 'POST',
      body: payload,
    })

    const token = res.data?.access_token
    const loggedUser = res.data?.user

    if (!token || !loggedUser) {
      throw new Error('Login response tidak valid')
    }

    const authToken = useCookie('token')
    authToken.value = token

    user.value = loggedUser

    await navigateTo(
      loggedUser.role === 'admin'
        ? '/admin/admindashboard'
        : '/'
    )
  }


  const register = async (payload: {
    name: string
    email: string
    password: string
    password_confirmation: string
  }) => {
    const api = useApi()

    await api('/register', {
      method: 'POST',
      body: payload,
    })

    await login({
      email: payload.email,
      password: payload.password,
    })
  }

  const logout = () => {
    if (process.client) {
      localStorage.removeItem('token')
    }
    user.value = null
    navigateTo('/login')
  }

  return { user, login, register, logout }
}
