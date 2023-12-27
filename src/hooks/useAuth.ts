import { AuthContext } from '@/components'
import { useCallback, useContext } from 'react'

export function useAuth() {
  const { token, setToken } = useContext(AuthContext)

  const login = (data: string) => setToken(data)
  const logout = useCallback(() => {
    setToken('')
  }, [setToken])

  return { logout, login, isAuth: Boolean(token), token }
}
