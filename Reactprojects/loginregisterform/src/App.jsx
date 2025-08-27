import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"

function App() {


  return (
    <>
    {/* <Login/>
    <Register/> */}

    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Login/>}/>
      <Route path="/register"element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
