import React, { useContext } from 'react'
import DataContext from './contexts/DataContext'

const Component7 = () => {
  const {data, darkMode, setDarkMode} = useContext(DataContext)
  console.log('gia tri datacontext trong component 7', data)
  return (
    <div>
      <div>Component7</div>
      <button onClick={()=>setDarkMode(!darkMode)}> setDarkMode</button>
    </div>
  )
}

export default Component7;