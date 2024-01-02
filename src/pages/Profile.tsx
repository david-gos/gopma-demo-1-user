import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import api from '~/api/axios'
import { banner_profile } from '~/assets/image'

import { useAppDispatch, useAppSelector, useToast } from '~/hooks'
import { updateUser } from '~/store/reducers/userSlice'
import { Gender, areObjectsChange, mapStringToEnum } from '~/utils'
import { ProfileUserInput } from '~/utils/schema'

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  dob: yup.string(),
  gender: yup.string()
})

const gender = [
  {
    value: Gender.MALE,
    title: 'Male'
  },
  {
    value: Gender.FEMALE,
    title: 'Female'
  },
  {
    value: Gender.OTHER,
    title: 'Other'
  }
]

export function ProfilePage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ProfileUserInput>({ resolver: yupResolver(schema) })

  const dispatch = useAppDispatch()
  const toast = useToast()
  const userInfo = useAppSelector((state) => state.usersReducer.user)

  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState<Gender | undefined | string>(
    userInfo ? mapStringToEnum(Gender, userInfo?.gender) : ''
  )

  console.log(userInfo)

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value)
  }

  const handleSubmitUpdate = async (dataInput: ProfileUserInput) => {
    setLoading(true)
    try {
      const response = await api.users.updateInfo(dataInput)

      dispatch(updateUser(response))
      toast({ message: 'Profile updated successfully!', status: 'success' })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const onSubmitUpdate = (dataInput: ProfileUserInput) => {
    if (userInfo) {
      if (!areObjectsChange(dataInput, userInfo)) {
        handleSubmitUpdate(dataInput)
        return
      }
      toast({ message: 'No changes to the profile!', status: 'error' })
    }
  }

  return (
    <Box sx={{ width: '50%', minWidth: '400px', m: 'auto', mt: '10px' }}>
      <Box component='form' onSubmit={handleSubmit(onSubmitUpdate)} sx={{ p: '25px 80px' }}>
        <Box sx={{ width: '100%' }}>
          <img width={'100%'} src={banner_profile} alt='Banner profile' />
        </Box>

        <Typography variant='h5' sx={{ mb: '20px' }}>
          Manage your personal information
        </Typography>
        <Divider />
        <TextField
          id='filled-basic'
          variant='filled'
          label='First Name'
          error={Boolean(errors['firstName'])}
          {...register('firstName')}
          sx={{ fontSize: '16px', my: 1, width: '100%' }}
          type='text'
          defaultValue={userInfo?.firstName}
        />

        <TextField
          id='filled-basic'
          variant='filled'
          label='Last Name'
          defaultValue={userInfo?.lastName}
          error={Boolean(errors['lastName'])}
          {...register('lastName')}
          sx={{ fontSize: '16px', my: 1, width: '100%' }}
          type='text'
        />
        <Box sx={{ display: 'flex', gap: '36px' }}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label={'Date of birth'}
              defaultValue={dayjs(userInfo?.dob)}
              onChange={(newValue: Dayjs | null) => {
                setValue('dob', newValue?.toISOString())
              }}
              format='DD/MM/YYYY'
              slotProps={{
                textField: {
                  variant: 'filled',
                  sx: {
                    width: '100%'
                  }
                }
              }}
            />
          </DemoContainer>
          <FormControl variant='filled' sx={{ minWidth: 130, my: 1 }}>
            <InputLabel id='demo-simple-select-filled-label'>Gender</InputLabel>
            <Select
              value={selected}
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              {...register('gender')}
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {gender.map((item) => {
                return (
                  <MenuItem key={item.value} value={item.value}>
                    {item.title}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ textAlign: 'center', mt: '20px' }}>
          <LoadingButton
            type='submit'
            loading={loading}
            loadingPosition='center'
            variant='contained'
            disabled={loading}
            sx={{ marginTop: '.4rem' }}
          >
            <span>Save profile</span>
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  )
}
