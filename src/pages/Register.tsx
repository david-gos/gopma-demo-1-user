import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Card } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { AuthenBackground, AuthenForm, BasicDatePicker, InputFieldCT, SelectVariants } from '~/components'
import { useToast } from '~/hooks'
import { CreateUserInput } from '~/utils/schema'

const schema = yup.object({
  email: yup.string().email('This field must be a Email').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Phone number is invalid')
    .required('Phone number is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  repassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password is required')
})

const gender = [
  {
    value: 'MALE',
    title: 'Male'
  },
  {
    value: 'FEMALE',
    title: 'Female'
  },
  {
    value: 'OTHER',
    title: 'Other'
  }
]

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserInput>({ resolver: yupResolver(schema) })

  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmitRegister = async (dataInput: CreateUserInput) => {
    setLoading(true)
  }

  return (
    <Card sx={{ display: 'flex', width: '950px', minWidth: '300px', height: '98vh' }}>
      <AuthenForm
        title={'Sign Up'}
        formDescription={'or use your email for registration:'}
        isSignUp
        isLoading={loading}
        handleSubmit={handleSubmit}
        onSubmitForm={onSubmitRegister}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <InputFieldCT title={'First Name'} nameField='firstName' register={register} errors={errors} />
            <InputFieldCT title={'Last Name'} nameField='lastName' register={register} errors={errors} />
          </Box>

          <InputFieldCT title={'Email'} nameField='email' register={register} errors={errors} />
          <InputFieldCT title={'Phone Number'} nameField='phoneNumber' register={register} errors={errors} />
          <Box sx={{ display: 'flex', gap: '36px' }}>
            <BasicDatePicker labelInput='Date of birth' />
            <SelectVariants title='Gender' listItem={gender} />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <InputFieldCT title={'Password'} nameField='password' register={register} typePassword errors={errors} />
            <InputFieldCT
              title={'Re-password'}
              nameField='repassword'
              register={register}
              typePassword
              errors={errors}
            />
          </Box>
        </Box>
      </AuthenForm>
      <AuthenBackground
        title={'Hello, Friend!'}
        description={'Enter your personal details and start journey with us.'}
        buttonContent={'Sign Up'}
        pathRouteTo={'/login'}
      />
    </Card>
  )
}
