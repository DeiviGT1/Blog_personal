import { Route, HashRouter, Routes, BrowserRouter } from "react-router-dom"
import { Home } from "./Home/Home"
import { Contador } from "./Contador/Contador"
import { Calculadora } from "./Calculadora/Calculadora"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/contador" element = {<Contador/>}/>
          <Route path="/calculadora" element = {<Calculadora/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App