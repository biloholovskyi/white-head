import { useAppDispatch } from '../../hooks/redux'

import { loginUser } from '../../store/slices/user.slice'

import DefaultButton from '../UI/buttons/defaultButton/defaultButton'

import { HeaderWrapper, HeaderTitle } from './styled'

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch()

  /*
   * delete user from store and redirect to auth form and delete auth token from local store
   * */
  const signOut = (): void => {
    localStorage.removeItem('token-white-head-admin')
    dispatch(loginUser(false))
  }

  return (
    <HeaderWrapper>
      <HeaderTitle to={'/cases'}>White Head Studio</HeaderTitle>
      <DefaultButton onClick={signOut}>Sign Out</DefaultButton>
    </HeaderWrapper>
  )
}

export default Header
