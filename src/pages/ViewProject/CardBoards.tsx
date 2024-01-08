import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Box, Card, Divider, Icon, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { AxiosError } from 'axios'
import { MouseEventHandler, useState } from 'react'
import { bg_card3 } from '~/assets/image'
import { useAppDispatch, useToast } from '~/hooks'
import { ProjectInfoOutput, projectService } from '~/services/project'
import { setLoading } from '~/store/reducers'

interface CardBoardsProps {
  item: ProjectInfoOutput
}

export function CardBoards({ item }: CardBoardsProps) {
  const dispatch = useAppDispatch()
  const toast = useToast()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOnDeleteItem = async () => {
    dispatch(setLoading(true))
    try {
      const res = await projectService.deleteProject(item.id)
      toast({ message: res.message, status: 'success' })
    } catch (error) {
      const errorAxios = error as AxiosError

      toast({ message: errorAxios.message, status: 'error' })
    } finally {
      dispatch(setLoading(false))
      setAnchorEl(null)
    }
  }
  return (
    <Card
      key={item.id}
      sx={{
        width: '32%',
        height: '10rem',
        p: '10px',
        mb: '30px',
        background: `url(${bg_card3}) center/cover no-repeat`
      }}
    >
      <Box
        sx={{
          // backgroundColor: 'rgba(0, 0, 0, 0.4)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          borderRadius: '4px',
          p: '5px'
        }}
      >
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Box display='flex' gap='5px'>
            <Icon
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.2)'
                },
                color: 'white'
              }}
            >
              <StarRoundedIcon fontSize='small' />
            </Icon>

            <Typography variant='h5' color='white'>
              {item.name}
            </Typography>
          </Box>

          <IconButton sx={{ color: 'white' }} onClick={handleClick}>
            <MoreVertRoundedIcon />
          </IconButton>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem disableRipple sx={{ gap: '10px' }}>
              <EditIcon />
              Edit
            </MenuItem>
            <MenuItem disableRipple sx={{ gap: '10px' }}>
              <FileCopyIcon />
              Duplicate
            </MenuItem>
            <MenuItem disableRipple sx={{ gap: '10px' }}>
              <GroupAddRoundedIcon />
              Invite members
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem disableRipple sx={{ gap: '10px', color: '#d32f2f' }} onClick={handleOnDeleteItem}>
              <DeleteIcon color='error' />
              Delete
            </MenuItem>
          </Menu>
        </Box>

        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Box display='flex' alignItems='center' gap='5px'>
            <IconButton size='small' sx={{ color: 'white' }}>
              <AccessTimeFilledIcon fontSize='small' />
            </IconButton>
          </Box>
          <Box display='flex' alignItems='center' gap='5px'>
            <AvatarGroup total={item.roles.length}>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
              <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
            </AvatarGroup>
            <IconButton size='small' sx={{ color: 'white' }}>
              <CircleOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
