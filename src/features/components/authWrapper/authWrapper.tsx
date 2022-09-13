import { FC } from 'react'

import { Wrapper } from './styles'

const AuthWrapper: FC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => {
  return <Wrapper>{children}</Wrapper>
}

export default AuthWrapper
