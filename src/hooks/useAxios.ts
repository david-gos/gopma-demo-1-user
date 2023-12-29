import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { axiosClient } from '../api/axios'

export interface DataResponse {
  status: string
  message: string
  data: any
  accessToken: string
}

export interface UseAxiosResponse<DataResponse> {
  response: DataResponse | null
  error: any
  isLoading: boolean
  fetchData: (body: object) => void
}

export const useAxios = <DataResponse>(
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  api: string,
  body: object = {},
  options: AxiosRequestConfig = {},
  deps: unknown[] = []
): UseAxiosResponse<DataResponse> => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<DataResponse | null>(null)
  const [error, setError] = useState<any>()
  const controller = new AbortController()

  const fetchData = useCallback(
    async (body: object = {}) => {
      if (!isLoading) {
        setLoading(true)
        try {
          const res: AxiosResponse<DataResponse> = await axiosClient[method](api, body, {
            ...options,
            signal: controller.signal
          })

          setResponse(res as DataResponse)
          setError(null)
        } catch (err) {
          console.error(err)
          setError(err)
          setResponse(null)
        } finally {
          setLoading(false)
        }
      }
    },
    [isLoading, api, body, method, options]
  )

  useEffect(() => {
    if (method === 'get') fetchData()

    return () => {
      controller.abort()
    }
  }, [...deps])

  return { response, error, isLoading, fetchData }
}
