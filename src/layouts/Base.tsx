import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import api from '~/api/axios'
import { HeaderComponent } from '~/components'
import { useAppDispatch, useAuth } from '~/hooks'
import { updateUser } from '~/store/reducers/userSlice'

export function BaseLayout() {
  const { isAuth } = useAuth()
  const dispatch = useAppDispatch()

  const handleAuth = async () => {
    try {
      const response = await api.users.getInfo()
      console.log('profile: ', response)

      dispatch(updateUser(response))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isAuth) {
      handleAuth()
    }
  }, [isAuth])

  if (!isAuth) return <Navigate to='/login' replace />
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  )
}
