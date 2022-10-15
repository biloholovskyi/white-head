import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICase } from '../../features/cases/types/ICase'

import { fetchAllCases } from '../actionCreators/cases.actionCreators'

interface ICaseState {
  cases: ICase[]
}

const initialState: ICaseState = {
  cases: [],
}

const casesSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllCases.fulfilled.type]: (state, action: PayloadAction<ICase[]>) => {
      state.cases = action.payload
    },
  },
})

export default casesSlice.reducer
// export const {} = casesSlice.actions
