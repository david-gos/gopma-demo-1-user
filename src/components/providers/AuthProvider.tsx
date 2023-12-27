import { useLocalStorage } from '@/hooks'
import { PropsWithChildren, createContext } from 'react'

interface AuthContextProps {
  token: string
  setToken: (value: string | ((val: string) => string)) => void
}

export const AuthContext = createContext<AuthContextProps>({
  token: '',
  setToken: () => null
})

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useLocalStorage('accessToken', '')

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
