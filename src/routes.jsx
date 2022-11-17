import React from 'react'

import {Routes , Route} from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Main from './pages/Main'


function AppRoutes() {
  return (
    <div>
  <Routes>

        <Route path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/portfolio' element={<Work/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<h1 className='w-full h-screen bg-[rgb(18,21,32)] text-gray-300 text-4xl text-center py-8'>404 Pagina nao encontrada</h1>} />




  </Routes>

    </div>
  )
}

export default AppRoutes