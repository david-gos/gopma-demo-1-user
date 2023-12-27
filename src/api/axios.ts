import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0YWQ0YmQyLTU1NDgtNDBlYS1hZGU1LTA1N2IwNjQyMTM1YSIsImlhdCI6MTcwMzQ5MzMxM30.gPKGId6h4m9WH0DCKzT70737lf8t3NS9EfBOEo0RSqE'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})

axiosClient.interceptors.request.use((config) => config)

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    if (error && error.response && error.response.data) {
      return Promise.reject(error.response.data)
    }
    return Promise.reject(error)
  }
)

const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

export { axiosClient, axiosPrivate }
