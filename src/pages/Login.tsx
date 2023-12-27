import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Card } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { AuthenBackground, AuthenForm, InputFieldCT } from '~/components'
import { useAuth, useLocalStorage, useToast } from '~/hooks'
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

  const { login } = useAuth()
  const toast = useToast()
  const [_, setToken] = useLocalStorage('accessToken', '')
  const [loading, setLoading] = useState(false)

  const onSubmitLogin = async (dataInput: LoginUserInput) => {
    setLoading(true)
  }

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
          <InputFieldCT title={'Email or Phone'} nameField='username' register={register} errors={errors} />
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
