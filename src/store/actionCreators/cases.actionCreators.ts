import { createAsyncThunk } from '@reduxjs/toolkit'

import { casesMock } from '../../features/cases/data/cases.mock'

/* *
 * fetch all cases
 *  */
export const fetchAllCases = createAsyncThunk('cases/fetchAll', async (_) => {
  try {
    return casesMock
  } catch (e) {
    console.error('some Error')
  }
})
