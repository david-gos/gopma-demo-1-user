import { createSlice } from '@reduxjs/toolkit'
import { UserInfoOutput } from '~/utils'
import { RootState } from '../store'

const initialState = {
  user: {} as UserInfoOutput | null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = { ...action.payload }
    },
    removeUser: (state) => {
      state.user = null
    }
  }
})

export const { updateUser, removeUser } = userSlice.actions

export const selectUserProfile = (state: RootState) => state.usersReducer

export default userSlice.reducer
