interface User {
  id: number
  name: string
  email: string
}

export const useAuth = () => {
  const config = useRuntimeConfig()

  const token = useCookie<string | null>('auth_token', {
    default: () => null,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7
  })

  const user = useState<User | null>('auth_user', () => null)

  const isAuthenticated = computed(() => !!token.value)

  const login = async (email: string, password: string) => {
    const data = await $fetch<{ token: string; user: User }>('/login', {
      baseURL: config.public.apiBaseUrl,
      method: 'POST',
      body: { email, password }
    })
    token.value = data.token
    user.value = data.user
    await navigateTo('/')
  }

  const register = async (name: string, email: string, password: string) => {
    await $fetch<User>('/', {
      baseURL: config.public.apiBaseUrl,
      method: 'POST',
      body: { name, email, password }
    })
    await navigateTo('/login')
  }

  const logout = () => {
    token.value = null
    user.value = null
    return navigateTo('/login')
  }

  return { token, user, isAuthenticated, login, register, logout }
}
