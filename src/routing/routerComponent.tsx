import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { useAppSelector } from '../hooks/redux'

import { privateRoutes, publicRoutes } from './router'

const RouterComponent: FC = (): JSX.Element | null => {
  const { user } = useAppSelector((state) => state.user)
  const loading = false

  if (loading) {
    return null
  }

  if (user) {
    return (
      <Routes>
        {privateRoutes?.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route path={'*'} element={<Navigate replace to='/cases' />} />
      </Routes>
    )
  }

  return (
    <Routes>
      {publicRoutes?.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route path={'*'} element={<Navigate replace to='/auth' />} />
    </Routes>
  )
}

export default RouterComponent
