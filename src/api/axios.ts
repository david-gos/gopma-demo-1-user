import axios from 'axios'

const storedToken: string | null = localStorage.getItem('accessToken')
const token: string | null = typeof storedToken === 'string' ? JSON.parse(storedToken) : null

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
