import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  isLoading: boolean
}

const initialState: AppState = {
  isLoading: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  },
})

export default appSlice.reducer
export const { changeLoadingStatus } = appSlice.actions
