import React from 'react'

import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div name='home' className=' w-full h-screen bg-[rgb(18,21,32)]'>

        <div className='max-w-[1000px] mx-auto px-11 flex flex-col justify-center  h-full' >
                <p className='text-[#F9004D] text-2xl sm:text-4xl'>Oi , meu nome é </p>
                <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Joel Santos</h1>
                <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>Eu sou Desenvolvedor Frontend</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'> {'>'}23 Anos, apaixonado por tecnologia e obcecado em aprender constantemente , procuro uma oportunidade como Desenvolvedor Web.</p>

                <div>
                  <Link to='portfolio'> <button className='text-white border-2 px-6 py-3 mt-2 flex items-center gap-2 rounded hover:bg-[#F9004D] duration-300 hover:border-[#F9004D]'> Ver Projetos <HiArrowNarrowRight className='ml-2'/> </button></Link>
                   
                </div>
        </div>

    </div>
  )
}

export default Home