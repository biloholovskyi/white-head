import { FC } from 'react'

import DefaultInput from '../../../components/UI/inputs/defaultInput/defaultInput'
import DefaultButton from '../../../components/UI/buttons/defaultButton/defaultButton'

import { FormWrapper } from './styles'

const AuthForm: FC = (): JSX.Element => {
  return (
    <FormWrapper>
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
