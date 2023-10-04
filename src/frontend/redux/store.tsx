import ShareStoreSlice from './ShareStore/slice'
import { ShareStoreTypes } from './redux-types/ShareStore'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    shareStore: ShareStoreSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

export type RootState = {
  shareStore: ShareStoreTypes
}
