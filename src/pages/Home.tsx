import { useEffect } from 'react'
import { DataResponse, useAxios } from '~/hooks'

export function HomePage() {
  // console.log(import.meta.env.VITE_API_ENDPOINT)

  const body = {
    email: 'a0707@gmail.com',
    password: 'P@ssw0rd',
    firstName: 'David',
    lastName: 'Nop',
    phone: '0911782046'
  }

  const { response, error, isLoading, fetchData } = useAxios<DataResponse>('get', '/user/profile')

  useEffect(() => {
    if (response) {
      console.log(response)
    }
  }, [response, error, isLoading])
  return <div>Home</div>
}
