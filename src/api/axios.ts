import axios, { AxiosResponse } from 'axios'
import { CreateUserInput, LoginUserInput, ProfileUserInput, UserInfoOutput } from '~/utils'

export interface DataResponse {
  status: string
  message: string
  data: any
  accessToken: string
}

const storedToken: string | null = localStorage.getItem('accessToken')
const token: string | null = typeof storedToken === 'string' ? JSON.parse(storedToken) : null

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT

axios.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axios.interceptors.response.use(
  (response) => {
    return response?.data ?? response
  },
  (error) => {
    return Promise.reject(error?.response?.data ?? error)
  }
)

const responseBody = <T>(response: AxiosResponse<T>) => response.data

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  patch: <T>(url: string, body: {}) => axios.patch<T>(url, body).then(responseBody)
}

const auth = {
  login: (data: LoginUserInput) => request.post<DataResponse>('/auth/login', data),
  register: (data: CreateUserInput) => request.post<void>('/auth/register', data)
}

const users = {
  getInfo: () => request.get<UserInfoOutput>('/user/profile'),
  updateInfo: (data: ProfileUserInput) => request.patch<DataResponse>('/user', data)
}

const api = {
  auth,
  users
}

export default api
