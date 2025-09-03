import Navbar from './Layout/Navbar'
import './App.css'
import Footer from './Layout/Footer'
import Master from './Layout/Master'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Body from './Components/Body'
import Adminnabar from './Layout/Adminlayout/Adminnavbar'
import Adminmaster from './Layout/Adminlayout/Adminmaster'
import Courses from './Components/Courses'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Master/>}>
      <Route path='/'element={<Body/>}/>
      <Route path='/courses'element={<Courses/>}/>
         
      </Route>

      
     </Routes>
     </BrowserRouter>
   
    </>
  )
}

export default App
