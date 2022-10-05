import { FC, FormEvent, useEffect } from 'react'

import { useAppDispatch } from '../../../../hooks/redux'

import { loginUser } from '../../../../store/slices/user.slice'

import DefaultInput from '../../../../components/UI/inputs/defaultInput/defaultInput'
import DefaultButton from '../../../../components/UI/buttons/defaultButton/defaultButton'

import { FormWrapper } from './styles'

const AuthForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    checkToken()
  }, [])

  /*
   * check token in local store if issues redirect to cases page else render auth form
   * */
  const checkToken = (): void => {
    const token = localStorage.getItem('token-white-head-admin')
    if (token) {
      dispatch(loginUser(true))
    }
  }

  /*
   * create user data in store and crate local token
   * */
  const signIn = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const target = e.target as HTMLFormElement

    if (
      target.email.value === process.env.REACT_APP_EMAIL &&
      target.password.value === process.env.REACT_APP_PASSWORD
    ) {
      createToken()
      dispatch(loginUser(true))
    } else {
      alert('error')
    }
  }

  /*
   * create token and save to local store
   * */
  const createToken = (): void => {
    const token = 'sign-in-token'

    localStorage.setItem('token-white-head-admin', JSON.stringify(token))
  }

  return (
    <FormWrapper onSubmit={signIn}>
      <DefaultInput
        classWrapper='auth-form-input'
        label='Email'
        name='email'
        type='email'
        required
      />
      <DefaultInput
        classWrapper='auth-form-input'
        label='Password'
        name='password'
        type='password'
        required
      />
      <DefaultButton type='submit'>Sign In</DefaultButton>
    </FormWrapper>
  )
}

export default AuthForm
