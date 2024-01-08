import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Box, Button, Icon, Typography } from '@mui/material'
import { bg_card } from '~/assets/image'

interface ButtonProjectItem {
  name: string
}
export function ButtonProjectItem({ name }: ButtonProjectItem) {
  return (
    <Button
      variant='nav'
      fullWidth
      sx={{ borderRadius: '0', textAlign: 'start', placeContent: 'flex-start', px: '20px' }}
      startIcon={
        <Box display='flex' gap='5px' alignItems='center'>
          <Box>
            <img src={bg_card} alt='no image' height='20px' style={{ borderRadius: '2px' }} />
          </Box>
          <Typography
            variant='subtitle1'
            sx={{
              textTransform: 'initial',
              lineHeight: 1.8,
              width: '160px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {name}
          </Typography>
        </Box>
      }
      endIcon={
        <Icon
          sx={{
            height: '25px',
            width: '25px',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.3s ease',

            '&:hover': {
              transform: 'scale(1.2)'
            }
          }}
        >
          <StarRoundedIcon style={{ fontSize: '22px' }} />
        </Icon>
      }
    ></Button>
  )
}
