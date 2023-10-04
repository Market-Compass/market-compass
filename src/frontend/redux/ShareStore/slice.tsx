import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ShareStoreTypes } from '../redux-types/ShareStore'

const initialState: ShareStoreTypes = {
  loading: 0,
  breakPoint: 1,
  language: {},
}

const ShareStoreSlice = createSlice({
  name: 'share_store',
  initialState,
  reducers: {
    setLoadingGlobal: (state, actions: PayloadAction<boolean>) => {
      if (actions.payload) {
        return { ...state, loading: state.loading + 1 }
      }
      if (state.loading > 0) {
        return { ...state, loading: state.loading - 1 }
      }
      return state
    },
    setLanguageGlobal: (state, actions: PayloadAction<{ [key: string]: string }>) => {
      state.language = actions.payload
    },
    // setInfo: (state, actions: PayloadAction<UserRes>) => {
    //   state.info = actions.payload
    // },
    setBreakPoint: (state, actions: PayloadAction<number>) => {
      state.breakPoint = actions.payload
    },
    resetLoadingGlobal: (state) => {
      return { ...state, loading: 0 }
    },
    resetShareStore: () => initialState,
  },
})

export const {
  resetShareStore,
  setLoadingGlobal,
  setLanguageGlobal,
  setBreakPoint,
  resetLoadingGlobal,
  // setInfo,
} = ShareStoreSlice.actions

export default ShareStoreSlice
