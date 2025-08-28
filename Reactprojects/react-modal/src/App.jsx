import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactModal from './ReactModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ReactModal/>
    </>
  )
}

export default App
