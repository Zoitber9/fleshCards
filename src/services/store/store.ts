import { configureStore } from '@reduxjs/toolkit'

import { decksApi } from '@/services/decks-api/decks-api'

export const store = configureStore({
  reducer: {
    [decksApi.reducerPath]: decksApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(decksApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
