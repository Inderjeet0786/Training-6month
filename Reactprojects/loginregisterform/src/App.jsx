import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import Home from "./Home"
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
    {/* <Login/>
    <Register/> */}

    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Login/>}/>
      <Route path="/register"element={<Register/>}/>
      <Route path="/home" element={<Home/>}></Route>
     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
