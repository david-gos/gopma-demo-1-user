import { ThemeProvider } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { RouterProvider } from 'react-router-dom'
import { AlertDialogSlide, AuthProvider, LoadingComponent, ToastProvider } from './components'
import { router } from './routes/route'
import './styles/App.scss'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToastProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <RouterProvider router={router} />
            <LoadingComponent />
            <AlertDialogSlide />
          </LocalizationProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
