
import './Styles/App.scss'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SideNav from "./Components/SideNav"
import ContentWrapper from "./Pages/ContentWrapper"
import Watch from './Pages/Watch'
import Live from './Pages/Live'
import Profile from './Profile'

function App() {

  const [modalOpen, OpenModal] = useState( false)
{/* <Login modalOpen={modalOpen} OpenModal={OpenModal}/> */}
  return (
    <div className="App">
      <SideNav/>

      <Routes>
        <Route path="/" element={<ContentWrapper/>}>
          <Route index element={<Watch/>}/>
          <Route path='/live' element={<Live/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
