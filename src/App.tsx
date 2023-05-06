
import './Styles/App.scss'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SideNav from "./Components/SideNav"
import ContentWrapper from "./Pages/ContentWrapper"
import Watch from './Pages/Watch'
import Live from './Pages/Live'
import Profile from './Pages/Profile'
import ProfileVideo from './Pages/ProfileVideo'
import ProfilePlaylists from './Pages/ProfilePlaylists'
import ProfileSubscribers from './Pages/ProfileSubscribers'
import ProfileAbout from './Pages/ProfileAbout'
import Search from './Pages/Search'
import WatchVideo from "./Pages/WatchVideo"
import Login from './Components/Login'
import NavTop from './Components/NavTop'
import { verifyAuthentication } from '../Data/Reducers/authSlice'
import { RootState, useAppDispatch } from '../Data/Store'
import { load } from "react-cookies"
import { useSelector } from 'react-redux'
function App() {
  const authenticated = useSelector( (state: RootState ) => state.auth.LoggedIn)
  const dispatch = useAppDispatch()

  useState(() => {
    if (document.cookie && !authenticated )  {
      const cookie =load("x_auth",true)
      console.log( cookie)
      dispatch(verifyAuthentication(cookie))
    }
  })
  return (
    <div className="App">
      <SideNav />
      <Login/>
      <NavTop/>
      <Routes>
        <Route path="/" element={<ContentWrapper/>}>
          <Route index element={<Watch/>}/>
          <Route path='/live' element={<Live/>}/>
          <Route path="/profile/:id" element={<Profile/>}>
            <Route index element={<ProfileVideo/>}/>
            <Route path="/profile/:id/playlists" element={<ProfilePlaylists/>}/>
            <Route path="/profile/:id/subscribers" element={<ProfileSubscribers/>}/>
            <Route path="/profile/:id/about" element={<ProfileAbout/>}/>
          </Route>
          <Route path="/search" element={<Search/>}/>
          <Route path="/watch" element={<WatchVideo/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
