import React from 'react'

// import {IRoute} from "../types/IRoute";

const Auth = (): JSX.Element => {
  return <div>Auth</div>
}

export enum RouteNames {
  AUTH = '/auth',
  TEST_CLOSE = '/test',
}

export const publicRoutes = [{ path: RouteNames.AUTH, element: <Auth /> }]

export const privateRoutes = [
  { path: RouteNames.TEST_CLOSE, element: <div>Test Page</div> },
]
