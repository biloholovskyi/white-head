import { FC } from 'react'

import { AuthFrom, AuthWrapper } from '../features/auth'

const Auth: FC = (): JSX.Element => {
  return (
    <AuthWrapper>
      <AuthFrom />
    </AuthWrapper>
  )
}

export default Auth
