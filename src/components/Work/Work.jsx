import React from 'react'

import pokerdex from '../../assets/projects/pokerdex.gif'
import rio from '../../assets/projects/rio.png'
import github from '../../assets/projects/23.gif'
import portfolio from '../../assets/projects/port.gif'
function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[rgb(18,21,32)]'>

        <div className='max-w-[1000px] mx-auto p-4 px-11 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F9004D]'>Portfolio</p>
            <p className='py-6'>Meus projetos recentes</p>
          </div>

          <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{backgroundImage:`url(${pokerdex})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div'>
            
            
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                 PokeDex
                </span>

                  <div className='pt-8 text-center'>
                    <a href="https://poke-dex15.netlify.app/" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg '>Demo</button>
                    </a>
                    <a href="https://github.com/JoelSantos-JS/Pok-dex" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg '>Code</button>
                    </a>
                    
                  </div>
              </div>
            </div>
            <div style={{backgroundImage:`url(${github})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div'>
            
            
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                Github Search

                </span>

                  <div className='pt-8 text-center'>
                    <a href="https://github-profile-10.vercel.app/" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39] text-white font-bold text-lg '>Demo</button>
                    </a>
                    <a href="https://github.com/JoelSantos-JS/Github-Profile" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold  text-lg '>Code</button>
                    </a>
                    
                  </div>
              </div>
            </div>
            <div style={{backgroundImage:`url(${rio})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div'>
            
            
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                Weather Project

                </span>

                  <div className='pt-8 text-center'>
                    <a href="https://weather-project-lyart.vercel.app/" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg '>Demo</button>
                    </a>
                    <a href="https://github.com/JoelSantos-JS/weather-project" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg '>Code</button>
                    </a>
                    
                  </div>
              </div>
            </div>
            <div style={{backgroundImage:`url(${portfolio})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div'>
            
            
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                Portfolio

                </span>

                  <div className='pt-8 text-center'>
                    <a href="https://joel-new-portfolio.vercel.app/" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg '>Demo</button>
                    </a>
                    <a href="https://github.com/JoelSantos-JS/new-Portfolio" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg '>Code</button>
                    </a>
                    
                  </div>
              </div>
            </div>
          </div>

        </div>

      
      
      
      </div>
  )
}

export default Work