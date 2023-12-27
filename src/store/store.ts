import { configureStore } from '@reduxjs/toolkit'
import example from './reducers/example'

const rootReducer = {
  example: example
}

const store = configureStore({
  reducer: rootReducer
})

export default store
