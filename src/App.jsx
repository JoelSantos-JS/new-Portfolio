import Contato from "./components/Contato/Contato";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sobre from "./components/Sobre/Sobre";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Work from "./components/Work/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Sobre />
      <Tecnologias />
      <Work />
      <Contato />
    </div>
  );
}

export default App;
