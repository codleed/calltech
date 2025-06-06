import { configureStore } from '@reduxjs/toolkit'
import businessReducer from './slices/businessSlice'

export const store = configureStore({
  reducer: {
    business: businessReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

export default store
