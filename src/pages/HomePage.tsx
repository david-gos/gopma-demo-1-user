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

  const handleTL = async () => {
    fetchData()
    // console.log(res)
    // if (response) console.log(response)
    // if (error) console.log(error)
    // if (isLoading) console.log(isLoading)
  }
  console.log('aa', response)
  console.log('aa', error)
  console.log('aa', isLoading)
  return <button onClick={handleTL}>Home</button>
}
