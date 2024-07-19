import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Signup from './Pages/Signup'
import Login from './Pages/Login.jsx'
import Profile from './Pages/Profile.jsx'
import Navbar from './Components/Navbar.jsx'
import './index.css'
import AuthContextProvider from './Context/AuthContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import Footer from './Components/Footer.jsx'
function App() {

  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    </Routes>
    <Footer />
    </AuthContextProvider>
    </>
  )
}

export default App
