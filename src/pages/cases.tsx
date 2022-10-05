import { FC } from 'react'

import Header from '../components/header/header'
import { ListCases } from '../features/cases'

const Cases: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <ListCases />
    </>
  )
}

export default Cases
