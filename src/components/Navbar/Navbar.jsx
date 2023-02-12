import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImSwitch } from "react-icons/im";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../../assets/logo.png";
import { NavbarContainer, ButtonSwitch } from "./styles";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const [isActive, setIsActive] = useState(true);

  const handleActiver = () => {
    setIsActive((props) => !props);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[rgb(18,21,32)] text-gray-300">
      <NavbarContainer>
        <h2 className="text-4xl text-[#F9004D]">JS</h2>
        <div className="text-4xl  cursor-pointer">
          <ButtonSwitch isactive={isActive} onClick={() => handleActiver()} />
        </div>
      </NavbarContainer>

      <div>
        <ul className="hidden md:flex gap-5">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/*  Hamburger */}

      <div
        className="md:hidden z-10 duration-300"
        onClick={() => handleClick()}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu*/}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[rgb(18,21,32)] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a onClick={handleClick} to="/">
            Home
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} to="sobre">
            Sobre
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} to="Tecnologias">
            Tecnologias
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} to="portfolio">
            Portfolio
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} to="contato">
            Contato
          </a>
        </li>
      </ul>

      {/*Social Icons */}

      <div className="hidden lg:flex flex fixed flex-col top-[35%] left-0 mb-1 ">
        <ul className="gap-2">
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[2px] duration-300 bg-blue-600 ">
            <a
              href="https://www.linkedin.com/in/joelsantos1/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} className="rounded" />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[2px] duration-300 bg-[#333333] rounded">
            <a
              href="https://github.com/JoelSantos-JS"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} className="rounded" />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[2px] duration-300 bg-[#6f2cb0] rounded">
            <a
              href="mailTo:joeltere9@gmail.com"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} className="rounded" />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[2px] duration-300 bg-[#565f] rounded">
            <a
              href="sobre"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resumo <BsFillPersonLinesFill size={30} className="rounded" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
