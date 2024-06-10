
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Tech from './pages/Tech';
import Works from './pages/Works';
import Contact from './pages/Contact';
import StarCanvas from './components/canvas/Stars';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
      <div className='relative'>
      <Router>
        <NavBar />
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Home />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarCanvas />
          </div>
        </div>
        </Router>
        </div>
    </MantineProvider>
  )
}

export default App
