import { useState } from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import AppRoutes from './routes'


function App() {
 

  return (
    <div>
      <Navbar/>
 <AppRoutes/>
    </div>
  )
}

export default App
