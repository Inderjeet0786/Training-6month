import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './First'
export let data1 = createContext()
export let data2 = createContext()
function App() {
  let name = "Simran"
  let student = {name:"harsh",rollno:102}
  return (
    <>
    {/* provider */}
    <data1.Provider value={name}>
      <data2.Provider value={student}>
        <h1>This is app </h1>
        <First/>
        </data2.Provider>
      </data1.Provider>
    </>
  )
}

export default App
