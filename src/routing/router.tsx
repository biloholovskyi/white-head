import React from 'react'

import { IRoute } from '../types/IRoute'

import Cases from '../pages/cases'
import Auth from '../pages/auth'

export enum RouteNames {
  AUTH = '/auth',
  CASES = '/cases',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.AUTH, element: <Auth /> },
]

export const privateRoutes: IRoute[] = [
  { path: RouteNames.CASES, element: <Cases /> },
]
