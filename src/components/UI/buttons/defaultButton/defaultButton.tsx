import { FC } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'

import { ButtonWrapper } from './styles'
import { themeMaterialUI } from '../../../../styles/materialUITheme'

interface DefaultButtonProps {
  className?: string
  children: JSX.Element | string
  [otherProps: string]: any
}

const DefaultButton: FC<DefaultButtonProps> = ({
  className,
  children,
  ...otherProps
}): JSX.Element => {
  return (
    <ButtonWrapper className={className}>
      <ThemeProvider theme={themeMaterialUI}>
        <Button {...otherProps} variant='contained'>
          {children}
        </Button>
      </ThemeProvider>
    </ButtonWrapper>
  )
}

export default DefaultButton
