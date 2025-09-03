import React, { useContext } from 'react'
import { ThemeContext } from './App'

function Component1() {
    const{ theme,ChangeTheme} = useContext(ThemeContext)
  return (
    <>
     <h2>Current Theme is {theme}</h2>

     <button onClick={ChangeTheme}>
        ToogleTheme</button> 
    </>
  )
}

export default Component1

