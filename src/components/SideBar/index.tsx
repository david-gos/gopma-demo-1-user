import AddIcon from '@mui/icons-material/Add'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined'
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined'
import { Box, Button, Icon, IconButton, Slide, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { image_profile } from '~/assets/image'
import { useAppSelector } from '~/hooks'
import { selectProjects, selectUserProfile } from '~/store/reducers'
import { ButtonProjectItem } from './ButtonProjectItem'

interface SideBarProps {
  children: ReactNode
}

export function SideBar({ children }: SideBarProps) {
  const [openSideBar, setOpenSideBar] = useState(true)
  const userInfo = useAppSelector(selectUserProfile)
  const projects = useAppSelector(selectProjects)
  const location = useLocation()

  return (
    <Box bgcolor='white' borderTop='1px solid' borderColor='secondary.light' display='flex'>
      <Slide direction='right' in={!openSideBar} mountOnEnter unmountOnExit>
        <Box width='20px' height='calc(100vh - 65px)'>
          <Box
            position='relative'
            width='100%'
            height='100%'
            bgcolor='secondary.light'
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{
              '&:hover': {
                cursor: 'pointer',
                opacity: '0.8'
              },
              background:
                'linear-gradient(90deg, rgba(68,84,111,1) 35%, rgba(58,113,120,1) 95%, rgba(68,106,111,1) 100%)'
            }}
            onClick={() => setOpenSideBar((openSideBar) => !openSideBar)}
          >
            <Icon
              sx={{
                color: 'white'
              }}
            >
              <KeyboardArrowRightIcon />
            </Icon>
          </Box>
        </Box>
      </Slide>
      <Slide direction='right' in={openSideBar} mountOnEnter unmountOnExit>
        <Box width='271px' height='calc(100vh - 65px)'>
          <Box width='100%' height='100%' borderRight='1px solid' borderColor='secondary.light'>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              p='8px'
              borderBottom='1px solid'
              borderColor='secondary.light'
            >
              <Box
                display='flex'
                alignItems='center'
                gap='10px'
                sx={{
                  '&:hover': {
                    cursor: 'default'
                  }
                }}
              >
                <img width='40px' height='40px' style={{ borderRadius: '2px' }} src={image_profile} alt='no image' />
                <Box>
                  <Typography variant='subtitle1' fontWeight='500'>
                    {userInfo?.user?.firstName + ' ' + userInfo?.user?.lastName}
                  </Typography>
                  <Typography variant='subtitle2'>Software Developer</Typography>
                </Box>
              </Box>
              <IconButton
                size='small'
                sx={{ height: '30px', width: '30px' }}
                onClick={() => setOpenSideBar((openSideBar) => !openSideBar)}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
            </Box>

            <Box mt='10px'>
              <Box>
                <Link to={'/'}>
                  <Button
                    variant='nav'
                    fullWidth
                    sx={{
                      borderRadius: '0',
                      textAlign: 'start',
                      placeContent: 'flex-start',
                      px: '20px',
                      backgroundColor: location.pathname === '/' ? 'secondary.light' : ''
                    }}
                    startIcon={
                      <Box display='flex' gap='5px' alignItems='center'>
                        <HomeRoundedIcon fontSize='small' />
                        <Typography variant='subtitle1' sx={{ textTransform: 'initial', lineHeight: 1.8 }}>
                          Home
                        </Typography>
                      </Box>
                    }
                  ></Button>
                </Link>
              </Box>

              <Box px='13px' py='4px' borderBottom='1px solid' borderTop='1px solid' borderColor='secondary.light'>
                <Typography
                  variant='subtitle1'
                  fontWeight='500'
                  sx={{
                    '&:hover': {
                      cursor: 'default'
                    }
                  }}
                >
                  Project views
                </Typography>
              </Box>

              <Box>
                <Link to={location.pathname.includes('task') ? '/task/boards' : '/project/boards'}>
                  <Button
                    variant='nav'
                    fullWidth
                    sx={{
                      borderRadius: '0',
                      textAlign: 'start',
                      placeContent: 'flex-start',
                      px: '20px',
                      backgroundColor: location.pathname.includes('boards') ? 'secondary.light' : ''
                    }}
                    startIcon={
                      <Box display='flex' gap='5px' alignItems='center'>
                        <SpaceDashboardOutlinedIcon fontSize='small' />
                        <Typography variant='subtitle1' sx={{ textTransform: 'initial', lineHeight: 1.8 }}>
                          Boards
                        </Typography>
                      </Box>
                    }
                  ></Button>
                </Link>
                <Link to={location.pathname.includes('task') ? '/task/table' : '/project/table'}>
                  <Button
                    variant='nav'
                    fullWidth
                    sx={{
                      borderRadius: '0',
                      textAlign: 'start',
                      placeContent: 'flex-start',
                      px: '20px',
                      backgroundColor: location.pathname.includes('table') ? 'secondary.light' : ''
                    }}
                    startIcon={
                      <Box display='flex' gap='5px' alignItems='center'>
                        <ViewListOutlinedIcon fontSize='small' />
                        <Typography variant='subtitle1' sx={{ textTransform: 'initial', lineHeight: 1.8 }}>
                          Table
                        </Typography>
                      </Box>
                    }
                  ></Button>
                </Link>
              </Box>

              <Box
                px='13px'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                py='4px'
                borderBottom='1px solid'
                borderTop='1px solid'
                borderColor='secondary.light'
              >
                <Typography
                  variant='subtitle1'
                  fontWeight='500'
                  sx={{
                    '&:hover': {
                      cursor: 'default'
                    }
                  }}
                >
                  Your projects
                </Typography>

                <IconButton size='small' sx={{ height: '25px', width: '25px', borderRadius: '2px' }}>
                  <AddIcon />
                </IconButton>
              </Box>

              <Box height='calc(54vh - 4px)' overflow='auto'>
                {projects?.map((item) => <ButtonProjectItem item={item} />)}
              </Box>
            </Box>
          </Box>
        </Box>
      </Slide>
      <Box
        width={openSideBar ? 'calc(100vw - 271px)' : 'calc(100vw - 20px)'}
        height='calc(100vh - 65px)'
        overflow='auto'
      >
        {children}
      </Box>
    </Box>
  )
}
