import React, { useContext } from 'react'
import { ThemeContext } from './App'

function Component2() {
    const {theme,ChangeTheme} = useContext(ThemeContext)
  return (
    <>
      <h1>Theme is {theme}</h1>
    </>
  )
}

export default Component2
