import { combineReducers, configureStore } from '@reduxjs/toolkit'

import userSlice from './slices/user.slice'
import appSlice from './slices/app.slice'

const rootReducer = combineReducers({
  user: userSlice,
  app: appSlice,
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
