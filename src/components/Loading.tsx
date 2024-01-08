import { Backdrop, CircularProgress } from '@mui/material'
import { useAppSelector } from '~/hooks'
import { selectLoading } from '~/store/reducers'

export function LoadingComponent() {
  const select = useAppSelector(selectLoading)

  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={select.isLoading}>
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}
