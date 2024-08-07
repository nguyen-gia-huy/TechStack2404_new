import React, { useContext } from 'react'
import DataContext from './contexts/DataContext'

const Component6 = () => {
  const dataContext = useContext(DataContext)
  console.log(dataContext)
  return (
    <div>Component6</div>
  )
}

export default Component6