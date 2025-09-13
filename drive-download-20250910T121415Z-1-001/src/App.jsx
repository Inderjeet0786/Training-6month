
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './layout/Master'
import Home from './components/Home'
import About from './components/About'
import AdminMaster from './admin/layout/AdminMaster'
import Dashboard from './admin/components/Dashboard'
import AddCategory from './admin/components/AddCategory'
import Count from './Count'
import Login from './components/Login'
import Counter from './components/Counter'
import Myclass from './components/Myclass'
import Modelfile from './components/Modelfile'
import CsvData from './components/CsvData'
import ManageCategory from './admin/components/ManageCategory'
import UpdateCategory from './admin/components/UpdateCategory'
// import CsvData from './components/CsvData'

function App() {
  

  return (
    <>
    {/* a->Link and href->to */}
      <BrowserRouter>
            <Routes>
                {/* <Route path='/header' element={<Header/>}></Route> */}
                <Route path='/' element={<Master/>}>
                  {/* childs call,outlet call */}
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/count' element={<Count/>}/>
                    <Route path='/counter' element={<Counter/>}/>
                    <Route path='/classcom' element={<Myclass/>}/>
                    <Route path='/model' element={<Modelfile/>}/>
                    <Route path='/downloadcsv' element={<CsvData/>}/>
                </Route>
                {/* Admin Master */}
                <Route path='/admin' element={<AdminMaster/>}>
                {/* admin outlets */}
                      <Route path='/admin' element={<Dashboard/>}></Route>
                      <Route path='/admin/addcategory' element={<AddCategory/>}/>
                      <Route path='/admin/managecategory' element={<ManageCategory/>}/>
                      <Route path='/admin/updatecategory/:name' element={<UpdateCategory/>}/>
                </Route>



            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
