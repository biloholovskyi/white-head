import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { theme } from '../../styles/theme'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.white};
  padding: 15px 40px;
  box-shadow: 3px 9px 10px 1px rgba(0, 0, 0, 0.75);
`

export const HeaderTitle = styled(Link)`
  color: ${theme.colors.mainDark};
  text-decoration: none;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
  transition: all 0.3s;

  &:hover {
    color: ${theme.colors.mainGold};
  }
`
