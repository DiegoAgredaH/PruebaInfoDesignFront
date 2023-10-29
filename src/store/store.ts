import { configureStore } from '@reduxjs/toolkit'
import { segmentsSlice } from './slices/segments'
import { clientsSlice } from './slices/clients'
import { worstSegmentsSlice } from './slices/worstSegmentsByClient'

export const store = configureStore({
  reducer: {
    segments: segmentsSlice.reducer,
    clients: clientsSlice.reducer,
    worstSegments: worstSegmentsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch