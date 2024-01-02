import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes/route'

import { ThemeProvider } from '@mui/material'
import { AuthProvider, ToastProvider } from './components'
import './styles/App.scss'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToastProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <RouterProvider router={router} />
          </LocalizationProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
