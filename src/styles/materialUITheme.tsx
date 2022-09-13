import { createTheme } from '@material-ui/core/styles'

import { theme } from './theme'

export const themeMaterialUI = createTheme({
  palette: {
    primary: {
      light: theme.colors.mainGoldLight,
      main: theme.colors.mainGold,
      dark: theme.colors.mainGoldDark,
    },
  },
})
