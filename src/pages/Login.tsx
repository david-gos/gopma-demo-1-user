import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Card, FilledInput, FormControl, InputLabel } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { AuthenBackground, AuthenForm, InputFieldCT } from '~/components'
import { DataResponse, useAuth, useAxios, useToast } from '~/hooks'
import { LoginUserInput } from '~/utils/schema'

const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
})

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginUserInput>({ resolver: yupResolver(schema) })

  const { response, error, isLoading, fetchData } = useAxios<DataResponse>('post', '/auth/login')
  const { login } = useAuth()
  const toast = useToast()
  const [loading, setLoading] = useState(false)

  const onSubmitLogin = async (dataInput: LoginUserInput) => {
    fetchData(dataInput)
  }

  useEffect(() => {
    setLoading(isLoading)
    if (response) {
      console.log(response)
      toast({ message: 'Login successful!', status: 'success' })
      login(response?.accessToken)
    }
  }, [isLoading])

  useEffect(() => {
    setLoading(isLoading)

    if (error) {
      console.log(error)

      toast({ message: error.message, status: 'error' })
    }
  }, [error])

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  return (
    <Card sx={{ display: 'flex', width: '950px', minWidth: '300px', height: '98vh' }}>
      <AuthenForm
        title={'Sign In'}
        formDescription={'or use your account:'}
        isLoading={loading}
        handleSubmit={handleSubmit}
        onSubmitForm={onSubmitLogin}
      >
        <Box>
          <FormControl error={Boolean(errors['username'])} sx={{ my: 1, width: '100%' }} variant='filled'>
            <InputLabel required className='MuiInputLabel-standard'>
              Username
            </InputLabel>
            <FilledInput {...register('username')} sx={{ fontSize: '16px' }} type='text' defaultValue='' />
          </FormControl>
          <InputFieldCT title={'Password'} nameField='password' register={register} typePassword errors={errors} />
        </Box>
      </AuthenForm>
      <AuthenBackground
        title={'Welcome Back!'}
        description={'To keep connected with us please login with your personal info.'}
        buttonContent={'Sign In'}
        pathRouteTo={'/register'}
      />
    </Card>
  )
}
