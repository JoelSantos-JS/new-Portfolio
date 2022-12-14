import React from "react";

import pokerdex from "../../assets/projects/pokerdex.gif";

import github from "../../assets/projects/23.gif";
import portfolio from "../../assets/projects/port.gif";

import jsmassas from "../../assets/projects/Jsmassas.gif";
import desafio from "../../assets/projects/17.gif";

import jsextension from "../../assets/projects/extension.png";
function Work() {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[rgb(18,21,32)]"
      id="work"
    >
      <div className="max-w-[1000px] mx-auto p-4 px-11 flex flex-col justify-center pb-[80px]  w-full h-full">
        <div className=" flex flex-col items-center py-8 justify-center mt-[150px] ">
          <p className="text-3xl font-bold mt-[150px]  inline border-b-4 text-gray-300 border-[#F9004D]">
            Portfolio
          </p>
          <p className="py-6 text-2xl">Meus projetos recentes</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div
            style={{ backgroundImage: `url(${pokerdex})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto container-div"
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider mt- ">
                PokeDex
              </span>

              <div className="pt-8 text-center">
                <a href="https://poke-dex15.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/JoelSantos-JS/Pok-dex"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>

              <div className="pt-5 text-center flex flex-col items-center text-sm  gap-2    "></div>
            </div>
            <div className="text-center mt-8 opacity-0 py-2 px-8  rounded group-hover:opacity-100 bg-[#1B1F39] ">
              <p className="text-lg text-zinc-50">
                Projeto Pokedex para aprimorar minha abilidades em HTML, CSS,JS.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${github})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto container-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Github Search
              </span>

              <div className="pt-8 text-center">
                <a href="https://github-profile-10.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39] text-white font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/JoelSantos-JS/Github-Profile"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold  text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <div className="text-center mt-8 opacity-0 py-4 px-8  rounded group-hover:opacity-100 bg-[#1B1F39] ">
              <p className="text-lg text-zinc-50">
                O projeto utiliza: React, Styled Components, Axios,
                React-Router-DOM e React-Icons.
              </p>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center  mb-10 mx-auto container-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Portfolio
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://joel-new-portfolio.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/JoelSantos-JS/new-Portfolio"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <div className="text-center mt-8 opacity-0 py-4 px-8  rounded group-hover:opacity-100 bg-[#1B1F39] ">
              <p className="text-lg text-zinc-50">
                O projeto utiliza: React, TailwindCss,
                React-scroll,React-Router-DOM e React-Icons.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${jsextension})` }}
            className="shadow-lg shadow-[#040c16] group container jsextension rounded-md flex flex-col justify-center items-center  mb-10 mx-auto container-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Js-Extension
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://github.com/JoelSantos-JS/JS-Extension"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <div className="text-center mt-8 opacity-0 py-4 px-8 rounded group-hover:opacity-100 bg-[#1B1F39] ">
              <p className="text-lg text-zinc-50">
                O projeto utiliza: React, Scss, Firebase, e React-Icons.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${desafio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center  mb-10 mx-auto container-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Desafio front-end
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://desafio-front-end-psi.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/JoelSantos-JS/Desafio-Front-End"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <div className="text-center mt-8 opacity-0 py-4 px-8 rounded group-hover:opacity-100 bg-[#1B1F39] ">
              <p className="text-lg text-zinc-50">
                O projeto foi um desafio para um Vaga front-end ele utiliza:
                Html,Css,Javascript.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${jsmassas})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center  mb-10 mx-auto container-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Js-Massas
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://pj-full-js-massas-tuz2.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/JoelSantos-JS/Pj-full---JsMassas.git"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <div className="text-center mt-8 opacity-0 py-4 px-8 rounded group-hover:opacity-100 bg-[#1B1F39] ">
              <p className="text-lg text-zinc-50">
                O projeto utiliza: React, Scss, Sanity, e React-Icons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
