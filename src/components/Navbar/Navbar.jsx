import React, { useState } from 'react'
    import {FaBars, FaTimes , FaGithub , FaLinkedin, FaFacebook} from 'react-icons/fa'
    import {HiOutlineMail} from 'react-icons/hi'
    import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../../assets/logo.png'

import {Link } from 'react-router-dom'

function Navbar() {
    const [nav , setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[rgb(18,21,32)] text-gray-300'>
        <div>
           
           <h2 className='text-4xl text-[#F9004D]'>JS</h2>

        </div>

        <div >
            <ul className='hidden md:flex gap-5'>
                <li>
                <Link to='/' >Home</Link>
                </li>
                <li>

                <Link  to="about" >
        About
        </Link>
                </li>
                <li>
                <Link  to="skills" >
        Skills
        </Link>
                </li>
                <li>
                <Link  to="portfolio" >
        Portfolio
        </Link>
                </li>
                <li>
                <Link  to="contact" >
        Contact
        </Link>
                </li>
            </ul>

        </div>

        {/*  Hamburger */}

        <div className='md:hidden z-10 duration-300' onClick={() => handleClick()}>
       {!nav ? <FaBars/> : <FaTimes/>}
        </div>


        {/* Mobile menu*/}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[rgb(18,21,32)] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="/" >
        Home
        </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="about" >
        About
        </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="skills" >
        Skills
        </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="portfolio" >
        Portfolio
        </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}   to="contact" >
        Contact
        </Link>
                </li>

        </ul>

        {/*Social Icons */}

        <div className= 'hidden lg:flex flex fixed flex-col top-[35%] left-0 mb-1 '>
            <ul className='gap-2'>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[2px] duration-300 bg-blue-600 ' > 
                    <a href="https://www.linkedin.com/in/joelsantos1/" target='_blank' className='flex justify-between items-center w-full text-gray-300'>Linkedin <FaLinkedin size={30} className='rounded'/></a>
                </li>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[2px] duration-300 bg-[#333333] rounded' > 
                    <a href="https://github.com/JoelSantos-JS" target='_blank'  className='flex justify-between items-center w-full text-gray-300'>GitHub <FaGithub size={30} className='rounded'/></a>
                </li>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[2px] duration-300 bg-[#6f2cb0] rounded' > 
                    <a href="mail:joeltere9@gmail.com" target='_blank'  className='flex justify-between items-center w-full text-gray-300'>Email <HiOutlineMail size={30} className='rounded'/></a>
                </li>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[2px] duration-300 bg-[#565f] rounded' > 
                    <a href="/about"    className='flex justify-between items-center w-full text-gray-300'>Resumo <BsFillPersonLinesFill size={30} className='rounded'/></a>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar