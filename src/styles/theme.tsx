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
      light: teal[200],
      main: grey[600],
      dark: grey[800],
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
    ].join(','),
    subtitle2: {
      fontSize: '14px',
      fontWeight: '400'
    }
  }
})

export default theme
