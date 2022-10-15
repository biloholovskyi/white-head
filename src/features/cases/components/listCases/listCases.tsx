import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'

import { WrapperList } from './styled'

import { fetchAllCases } from '../../../../store/actionCreators/cases.actionCreators'

const ListCases = (): JSX.Element => {
  const { cases } = useAppSelector((state) => state.cases)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllCases())
    console.log(cases)
  }, [cases])

  return <WrapperList>List cases</WrapperList>
}

export default ListCases
