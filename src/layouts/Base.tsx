import { Box } from '@mui/material'
import { AxiosError } from 'axios'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { HeaderComponent, SideBar } from '~/components'
import { useAppDispatch, useAuth } from '~/hooks'
import { userService } from '~/services'
import { updateUser } from '~/store/reducers/userSlice'

export function BaseLayout() {
  const { isAuth, logout } = useAuth()
  const dispatch = useAppDispatch()

  const handleAuth = async () => {
    try {
      const response = await userService.getInfo()
      console.log('profile: ', response)

      dispatch(updateUser(response.data))
    } catch (error) {
      const axiosError = error as AxiosError

      console.log(axiosError)

      if (axiosError.message === 'Unauthorized') logout()
    }
  }

  useEffect(() => {
    if (isAuth) {
      console.log(isAuth)

      handleAuth()
    }
  }, [isAuth])

  if (!isAuth) return <Navigate to='/login' replace />
  return (
    <>
      <HeaderComponent />
      <Box width='100%'>
        <SideBar>
          <Outlet />
        </SideBar>
      </Box>
    </>
  )
}
