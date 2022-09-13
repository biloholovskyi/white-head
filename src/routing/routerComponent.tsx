import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { privateRoutes, publicRoutes } from './router'

const RouterComponent: FC = (): JSX.Element | null => {
  const loading = false
  const user = false

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
