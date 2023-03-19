import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Landingpage from './Pages/Landingpage'
// import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App
