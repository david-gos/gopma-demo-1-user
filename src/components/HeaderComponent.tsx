import { Logout } from '@mui/icons-material'
import AdbIcon from '@mui/icons-material/Adb'
import { Divider, MenuItem } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import React, { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAuth } from '~/hooks'

export function HeaderComponent(props: { children: ReactNode }) {
  const { children } = props
  const { logout } = useAuth()
  const navigate = useNavigate()
  const userInfo = useAppSelector((state) => state.usersReducer.user)

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl' sx={{ backgroundColor: 'white' }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AdbIcon sx={{ display: { md: 'flex' }, mr: 1, color: 'primary.main' }} />
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'primary.main',
                  textDecoration: 'none'
                }}
              >
                LOGO
              </Typography>
            </Box>
            {children}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ width: '25px', height: '25px', backgroundColor: 'primary.main' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box sx={{ p: '6px 16px', width: '15rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Avatar sx={{ width: '30px', height: '30px', backgroundColor: 'primary.main' }} />
                <Box>
                  <Typography variant='subtitle2'>{userInfo?.firstName + ' ' + userInfo?.lastName}</Typography>
                  <Typography variant='subtitle2'>{userInfo?.email}</Typography>
                </Box>
              </Box>
              <Divider />
              <MenuItem
                onClick={() => {
                  navigate('/profile'), handleCloseUserMenu()
                }}
              >
                <Typography variant='subtitle1'>Profile</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => logout()}
                sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
              >
                <Typography variant='subtitle1'>Logout</Typography>
                <Logout sx={{ width: '20px', height: '20px', color: 'secondary.main' }} />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
