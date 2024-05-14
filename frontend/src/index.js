import React from 'react'
import ReactDOM from 'react-dom/client'
import Search from './Search'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Terms } from 'components/Verification/Terms/Terms'
import { Signup } from './components/Verification/Signup' 
import Signin from 'components/Verification/Signin'
import UserIntroduction from 'components/UserProfile/UserIntroduction/UserIntroduction'
import UserProfile from 'components/UserProfile/UserProfile/UserProfile'
import UserSchedule from 'components/UserProfile/UserSchedule/UserSchedule'
import HostEvent from 'HostEvent'
import HomePage from 'HomePage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="search" element={<Search />} />
        <Route path="terms" element={<Terms />} />
        <Route path="signup" element={<Signup />} />
        <Route path='signin' element={<Signin />} />
        <Route path='profile' element={<UserProfile/>} />
        <Route path='introduction' element={<UserIntroduction />}/>
        <Route path='host-event' element={<HostEvent />} />
        <Route path='schedule' element={<UserSchedule />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
