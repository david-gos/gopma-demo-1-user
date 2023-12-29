import { createTheme } from '@mui/material'
import { grey, teal } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      light: teal[200],
      main: teal[600],
      dark: teal[800],
      contrastText: '#fff'
    },
    secondary: {
      main: grey[800],
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

export default theme
