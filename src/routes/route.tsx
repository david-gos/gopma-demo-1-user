import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { AuthLayout, BaseLayout } from '~/layouts'
import {
  ErrorPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  ViewProjectBoards,
  ViewProjectTable,
  ViewTaskBoards,
  ViewTaskTable
} from '~/pages'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='project/boards' element={<ViewProjectBoards />} />
        <Route path='project/table' element={<ViewProjectTable />} />
        <Route path='task/boards' element={<ViewTaskBoards />} />
        <Route path='task/table' element={<ViewTaskTable />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>

      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)
