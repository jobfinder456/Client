import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PostJob from './pages/PostJob'
import Job from './pages/Job'
import EditPost from './pages/EditPost'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Payment from './pages/Payment'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

function App() {
  return (
    <> 
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/postjob" element={<PostJob/>} />
          <Route exact path='/job/:id' element={<Job />} />
          <Route exact path='/editpost/:id' element={<EditPost />} />
          <Route exact path='/dashboard' element={<Dashboard/>} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/payment' element={<Payment/>} />
          <Route exact path='/success' element={<Success />} />
          <Route exact path='/cancel' element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App