import { useState } from 'react'

import './App.css'
import NavBar from './components/navBar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'


import "./pages/home.jsx"
import HomePage from './pages/home.jsx'
import ExperiencePage from './pages/experience.jsx'
import ContactPage from './pages/contact.jsx'
function App() {

  return (
    <>

    <Router>
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path='/experience' element={<ExperiencePage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        
      </Routes>
    </Router>

      
    </>
  )
}

export default App
