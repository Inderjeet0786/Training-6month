import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createContext,useState } from "react";
import Manage from "./Manage"
import Edit from "./Edit"

export const datacontext = createContext();

function App() {

  let [data, setData] = useState([
        { name: "Simran", email: "simran@gmail.com" },
        { name: "Simr", email: "simr@gmail.com" },
        { name: "kamal",email: "kamal@gmail.com" },
        { name: "Anuj", email: "anuj@gmail.com"},
        { name: "Atul", email: "atul@gmail.com"},
        { name: "Soham", email: "sm@gmail.com"},
    ])

  return (
    <>
    <datacontext.Provider value={{data,setData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Manage />} />
          <Route path="/edit/:name/:email" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </datacontext.Provider>
      

    </>
  )
}

export default App
