import { createSlice } from '@reduxjs/toolkit'

export const example = createSlice({
  name: 'ex',
  initialState: {
    ex: ''
  },
  reducers: {
    addExample: (_state, _action) => {}
  }
})

export const { addExample } = example.actions

export const selectExample = (state: any) => state.ex

export default example.reducer
