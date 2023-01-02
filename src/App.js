import { Route, HashRouter, Routes } from "react-router-dom"
import {ForWhom} from "./ForWhom.jsx"
import {Introduccion} from "./Introduccion.jsx"
import {PerfilAcademico} from "./PerfilAcademico.jsx"

function App() {
  
  return (
    <>
      <ForWhom/>
      <Introduccion/>
      <PerfilAcademico/>
    </>
    
  );
}

export default App