import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { AuthLayout, BaseLayout } from '@/layouts'
import { ErrorPage, HomePage } from '@/pages'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<BaseLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route element={<AuthLayout />}></Route>

      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)
