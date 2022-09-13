import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface UserState {
  user: {} | null
}

const initialState: UserState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<{}>) {
      state.user = action.payload
    },
  },
})

export default userSlice.reducer
export const { loginUser } = userSlice.actions
