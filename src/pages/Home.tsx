import { useEffect } from 'react'
import { DataResponse, useAuth, useAxios } from '~/hooks'

export function HomePage() {
  const { logout } = useAuth()
  const { response, error, isLoading } = useAxios<DataResponse>('get', '/user/profile')

  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    if (response) {
      console.log(response)
    }
  }, [response, error, isLoading])
  return (
    <div>
      <div>Home</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
