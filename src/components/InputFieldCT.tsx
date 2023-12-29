import { useState } from 'react'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material'

export function InputFieldCT(_props: any) {
  const { title, typePassword, errors, nameField, register } = _props
  const [showPassword, setShowPassword] = useState(false)
  const [value] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <FormControl error={Boolean(errors[nameField])} sx={{ my: 1, width: '100%' }} variant='filled'>
      <InputLabel required className='MuiInputLabel-standard'>
        {title}
      </InputLabel>
      <FilledInput
        {...register(nameField)}
        sx={{ fontSize: '16px' }}
        type={showPassword || !typePassword ? 'text' : 'password'}
        defaultValue={value}
        endAdornment={
          typePassword ? (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : (
            <></>
          )
        }
      />
    </FormControl>
  )
}
