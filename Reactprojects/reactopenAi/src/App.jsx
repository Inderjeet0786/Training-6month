import { useState } from 'react'

import './App.css'
import Aiclient from './Aiclient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Aiclient/>
    </>
  )
}

export default App
