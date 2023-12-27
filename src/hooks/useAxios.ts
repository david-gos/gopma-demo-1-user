import { useCallback, useEffect, useState } from 'react'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { axiosClient } from '../api/axios'

export interface DataResponse {
  status: string
  message: string
  data: any
}

export interface UseAxiosResponse<DataResponse> {
  response: DataResponse | object | null
  error: AxiosError | null
  isLoading: boolean
  fetchData: () => void
}

export const useAxios = <DataResponse>(
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  api: string,
  body: object = {},
  options: AxiosRequestConfig = {},
  deps: unknown[] = []
): UseAxiosResponse<DataResponse> => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<DataResponse | object | null>(null)
  const [error, setError] = useState<AxiosError | null>(null)
  const controller = new AbortController()

  const fetchData = useCallback(async () => {
    if (!isLoading) {
      setLoading(true)
      try {
        const res: AxiosResponse<DataResponse> = await axiosClient[method](api, body, {
          ...options,
          signal: controller.signal
        })

        setResponse(res)
      } catch (err) {
        console.error(err)
        setError(err as AxiosError)
        // setResponse(null)
      } finally {
        setLoading(false)
      }
    }
  }, [isLoading, api, body, method, options])

  useEffect(() => {
    if (method === 'get') fetchData()

    return () => {
      controller.abort()
    }
  }, [...deps])

  return { response, error, isLoading, fetchData }
}
