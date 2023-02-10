import React from "react";

import pokerdex from "../../assets/projects/pokerdex.gif";

import github from "../../assets/projects/23.gif";
import portfolio from "../../assets/projects/port.gif";

import jsmassas from "../../assets/projects/Jsmassas.gif";
import desafio from "../../assets/projects/17.gif";
import burguer from "../../assets/projects/burguer.jpeg";
import blog from "../../assets/projects/sd.png";
import jsextension from "../../assets/projects/extension.png";
import Projects from "./Components/Projects";
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
          <p className="py-6 text-2xl">Meus projetos </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <Projects
            image={blog}
            link1="https://blog-rjdh5r2s6-joelsantos-js.vercel.app/"
            link2="https://github.com/JoelSantos-JS/blog"
            title="Blog"
            text="O projeto utiliza: React, css , React Toastfy e React-Icons."
          />
          <Projects
            image={burguer}
            link2="https://github.com/JoelSantos-JS/Front-end-Code-burger"
            title="CodeBurger"
            text="O projeto utiliza: React, TailwindCss, React-scroll,React-Router-DOM e React-Icons."
          />
          <Projects
            image={portfolio}
            link1="https://joel-new-portfolio.vercel.app/"
            link2="https://github.com/JoelSantos-JS/new-Portfolio"
            title="Portfolio"
            text="O projeto utiliza: React, TailwindCss, React-scroll,React-Router-DOM e React-Icons."
          />
          <Projects
            image={jsmassas}
            link1="https://pj-full-js-massas-tuz2.vercel.app/"
            link2="https://github.com/JoelSantos-JS/Pj-full---JsMassas.git"
            title="JS-Massas"
            text="O projeto utiliza: React, Scss, Sanity, e React-Icons."
          />

          <Projects
            image={jsextension}
            link2="https://github.com/JoelSantos-JS/JS-Extension"
            title="Js-Extension"
            text=" Projeto Pokedex para aprimorar minha abilidades em HTML, CSS,JS."
          />
          <Projects
            image={desafio}
            link1="https://desafio-front-end-psi.vercel.app/"
            link2="https://github.com/JoelSantos-JS/Desafio-Front-End"
            title="Desafio Front-end"
            text=" O projeto foi um desafio para um Vaga front-end ele utiliza: Html,Css,Javascript."
          />
          <Projects
            image={github}
            link1="https://github-profile-10.vercel.app/"
            link2="https://github.com/JoelSantos-JS/Github-Profile"
            title="Github Search"
            text=" O projeto utiliza: React, Styled Components, Axios, React-Router-DOM e React-Icons."
          />
          <Projects
            image={pokerdex}
            link1="https://poke-dex15.netlify.app/"
            link2="https://github.com/JoelSantos-JS/Pok-dex"
            title="PokeDex"
            text=" Projeto Pokedex para aprimorar minha abilidades em HTML, CSS,JS."
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
