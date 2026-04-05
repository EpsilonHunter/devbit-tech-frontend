interface User {
  id: number
  name: string
  email: string
}

export const useAuth = () => {
  const config = useRuntimeConfig()
  const authApi = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    },
    timeout: 10000,
    retry: 0
  })

  const token = useCookie<string | null>('auth_token', {
    default: () => null,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7
  })

  const user = useState<User | null>('auth_user', () => null)

  const isAuthenticated = computed(() => !!token.value)

  const authRequest = <T>(path: string, body: Record<string, string>) =>
    authApi<T>(path, {
      method: 'POST',
      body
    })

  const login = async (email: string, password: string) => {
    const data = await authRequest<{ token: string; user: User }>('/login', {
      email: email.trim(),
      password
    })
    token.value = data.token
    user.value = data.user
    await navigateTo('/')
  }

  const sendEmailCode = async (email: string) => {
    await authRequest('/email/code', {
      email: email.trim()
    })
  }

  const register = async (name: string, email: string, password: string, emailCode: string) => {
    await authRequest<User>('/', {
      name: name.trim(),
      email: email.trim(),
      password,
      emailCode: emailCode.trim()
    })
    await navigateTo('/login')
  }

  const logout = () => {
    token.value = null
    user.value = null
    return navigateTo('/login')
  }

  return { token, user, isAuthenticated, login, sendEmailCode, register, logout }
}
