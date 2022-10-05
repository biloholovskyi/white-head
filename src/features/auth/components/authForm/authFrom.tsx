import { FC, FormEvent } from 'react'

import { useAppDispatch } from '../../../../hooks/redux'

import { loginUser } from '../../../../store/slices/user.slice'

import DefaultInput from '../../../../components/UI/inputs/defaultInput/defaultInput'
import DefaultButton from '../../../../components/UI/buttons/defaultButton/defaultButton'

import { FormWrapper } from './styles'

const AuthForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const signIn = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const target = e.target as HTMLFormElement

    if (
      target.email.value === process.env.REACT_APP_EMAIL &&
      target.password.value === process.env.REACT_APP_PASSWORD
    ) {
      dispatch(loginUser(true))
    } else {
      alert('error')
    }
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
