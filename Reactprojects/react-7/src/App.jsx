
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'

import Master from './Layout/Master'
import Avatars from './Components/Avatars'
import Button from './Components/Button'
import FontAwsomeIcons from './Components/FontAwsomeIcons'
import Grid from './Components/Grid'
import Panel from './Components/Panel'
import Notifications from './Components/Notifications'
import SweetAlert from './Components/SweetAlert'
import SimpleLineIcons from './Components/SimpleLineIcons'
import Sidebar2 from './Components/Sidebar2'
import Charts from './Components/Charts'
import Iconmenu from './Components/Iconmenu'
import Form from './Components/Form'
import Datatables from './Components/Datatables'
import Basictable from './Components/Basictable'
import Googlemaps from './Components/Googlemaps'
import Jsvectormap from './Components/Jsvectormap'
import Chart from './Components/Chart'


function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<Master/>}>
    <Route path='/' element={<Main/>}/>
    <Route path='/avatars'element={<Avatars/>}/>
    <Route path='/button'element={<Button/>}/>
    <Route path='/fonticons'element={<FontAwsomeIcons/>}/>
    <Route path='/grid'element={<Grid/>}/>
    <Route path='/panel'element={<Panel/>}/>
    <Route path='/notifications'element={<Notifications/>}/>
    <Route path='/sweetalert'element={<SweetAlert/>}/>
    <Route path='/simpelineicons'element={<SimpleLineIcons/>}/>
    <Route path='/sidebar2'element={<Sidebar2/>}/>
    <Route path='/charts'element={<Charts/>}/>
    <Route path='/iconmenu' element={<Iconmenu/>}/>
    <Route path='/forms' element={<Form/>}/>
    <Route path='/datatable' element={<Datatables/>}/>
    <Route path='/table' element={<Basictable/>}/>
    <Route path='/googlemaps' element={<Googlemaps/>}/>
    <Route path='/jsvectormaps' element={<Jsvectormap/>}/>
    <Route path='/charts' element={<Chart/>}/>
    
    
    </Route>
   </Routes>
   </BrowserRouter>
  

    </>
  )
}

export default App
