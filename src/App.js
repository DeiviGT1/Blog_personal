import { Route, HashRouter, Routes, BrowserRouter } from "react-router-dom"
import { Home } from "./Home/Home"
import { Contador } from "./Contador/Contador"
import { Calculadora } from "./Calculadora/Calculadora"
import { ListaDeTareas } from "./ListaDeTareas/ListaDeTareas"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/contador" element = {<Contador/>}/>
          <Route path="/calculadora" element = {<Calculadora/>}/>
          <Route path="/listadetareas" element = {<ListaDeTareas/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App