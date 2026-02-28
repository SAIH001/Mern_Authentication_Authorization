import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



//-- Pages
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';


//-- CSS
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App