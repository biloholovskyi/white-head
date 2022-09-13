import { FC } from 'react'
import TextField from '@mui/material/TextField'
import { ThemeProvider } from '@mui/material/styles'

import { InputWrapper } from './styles'
import { themeMaterialUI } from '../../../../styles/materialUITheme'

interface DefaultInputProps {
  name: string
  label: string
  type: string
  classWrapper?: string
  required?: boolean
}

const DefaultInput: FC<DefaultInputProps> = ({
  name,
  label,
  type,
  classWrapper,
  required,
}): JSX.Element => {
  return (
    <InputWrapper className={classWrapper}>
      <ThemeProvider theme={themeMaterialUI}>
        <TextField
          className={'text-field-input'}
          type={type}
          label={label}
          variant='filled'
          name={name}
          required={required}
        />
      </ThemeProvider>
    </InputWrapper>
  )
}

export default DefaultInput
