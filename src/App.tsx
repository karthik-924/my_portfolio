import { useState } from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<h1>Contact</h1>} />
          <Route path='/projects' element={<h1>Projects</h1>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
