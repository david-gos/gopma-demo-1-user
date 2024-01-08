import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface AlertSlice {
  isOpen: boolean
  title: string
  content: string
  confirm: boolean
  name: string
}

const initialState: AlertSlice = {
  isOpen: false,
  title: '',
  content: '',
  confirm: false,
  name: ''
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setOpenAlert: (state, action) => {
      state.isOpen = true
      state.title = action.payload.title
      state.content = action.payload.content
      state.name = action.payload.name
    },
    setCloseAlert: (state, action) => {
      state.isOpen = false
      state.title = ''
      state.content = ''
      state.name = action.payload.name
      state.confirm = action.payload.confirm
    }
  }
})

export const { setOpenAlert, setCloseAlert } = alertSlice.actions

export const selectAlert = (state: RootState) => state.alertReducer

export default alertSlice.reducer
