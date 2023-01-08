import React from "react";

import { Routes, Route } from "react-router-dom";
import Sobre from "./components/Sobre/Sobre";
import Contato from "./components/Contato/Contato";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Work from "./components/Work/Work";
import Main from "./pages/Main";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/portfolio" element={<Work />} />
        <Route path="/contato" element={<Contato />} />
        <Route
          path="*"
          element={
            <h1 className="w-full h-screen bg-[rgb(18,21,32)] text-gray-300 text-4xl text-center py-8">
              404 Pagina nao encontrada
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default AppRoutes;
