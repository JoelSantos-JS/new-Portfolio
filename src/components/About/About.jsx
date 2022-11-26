import React from 'react'
import Navbar from '../Navbar/Navbar'
import {BsCloudDownload} from 'react-icons/bs'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[rgb(18,21,32)] text-gray-300' >
         

        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full  grid grid-cols-3 gap-8'>

                <div className='sm:text-right pb-8 pl-4 mt-10'>
                    <p className='text-4xl   font-bold inline border-b-4 border-[#F9004D]'>About</p>
                </div>

                </div>


               

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

                    <div className='sm:text-right text-3xl font-bold flex flex-col'>
                    <span>Olá! Eu sou Joel Santos. </span>
                    <span>Web Developer</span>
                    <div className='flex justify-end items-center'>
                    <a href='https://joelsantos-portfolio.netlify.app/assets/Curr%C3%ADculo%20profissional%20da%20TI%20preto%20e%20cinza.pdf'  target='_blank' className='bg-[#F9004D] text-xl  rounded py-3 mt-2 px-4 flex  justify-center items-center gap-3' download=''>Download CV <BsCloudDownload/> </a>
                    </div>
                   
                    </div>

                    <div>
                    <p>
                    Desenvolvedor Web Front-end e futuro desenvolvedor full stack, sou apaixonado pela área de tecnologia. Entusiasta em Web Hacking, curto muito jogos, animes, mangás, e esportes. Faço Musculaçao, elas são minhas atividades nas horas Vagas. Atualmente estudo como autodidata, inglês  e Programação.
                        </p>
                                    
                    </div>
                
                    
                    
            

        </div>

        </div>

    </div>
  )
}

export default About