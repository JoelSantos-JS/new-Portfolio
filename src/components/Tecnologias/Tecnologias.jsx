import React from "react";

import Html from "../../assets/html.png";
import css from "../../assets/css.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import javascript from "../../assets/javascript.png";
import typeScript from "../../assets/typescript-2.svg";
import php from "../../assets/php.png";

function Tecnologias() {
  return (
    <div name="Tecnologias" className="w-full h-screen bg-[rgb(18,21,32)]">
      <div className="max-w-[1000px] mx-auto flex flex-col p-4 justify-center w-full h-full">
        <div className="sm:text-left pb-8 pl-4  mt-12">
          <p className="text-4xl text-gray-300 inline font-bold inline border-b-4 border-[#F9004D]">
            Tecnologias
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8 mt-2 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="HTML" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="CSS" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="javascript" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={typeScript} alt="typeScript" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="react" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="node" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="tailwind" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={php} alt="tailwind" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
