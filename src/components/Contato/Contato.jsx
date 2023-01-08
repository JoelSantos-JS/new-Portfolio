import React from "react";

function Contato() {
  return (
    <div
      name="Contato"
      id="contato"
      className=" w-full h-screen bg-[rgb(18,21,32)] flex justify-center items-center p-4"
    >
      <form
        className="flex flex-col mt-10 "
        action="https://getform.io/f/4a6aa87c-e23f-43bc-ab70-106ccee92165"
        method="POST"
      >
        <div className="py-10">
          <p className="text-4xl font-bold inline   border-b-4 border-[#F9004D] text-gray-300">
            Contato
          </p>

          <p className="text-gray-300 py-4 ">
            Envie o formulário abaixo ou envie-me um e-mail -
            joeltere9@gmail.com
          </p>
        </div>
        <div className="flex flex-col">
          <input
            className="my-4 p-2 bg-[#ccd6f6] rounded"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] rounded"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            name="message"
            className="bg-[#ccd6f6] p-2"
            rows="5"
          ></textarea>

          <button
            className="text-white border-2 rounded hover:bg-[#F9004D] hover:border-[#F9004D]  px-4 py-3 my-8 mx-auto flex items-center"
            type="submit"
          >
            Envie-me
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contato;
