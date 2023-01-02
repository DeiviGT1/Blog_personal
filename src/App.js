import { Route, HashRouter, Routes } from "react-router-dom"
import { Header } from "./Header.jsx"
import {ForWhom} from "./ForWhom.jsx"
import {Introduccion} from "./Introduccion.jsx"
import {PerfilAcademico} from "./PerfilAcademico.jsx"
import { PerfilLaboral } from "./PerfilLaboral.jsx";
import { Viajes } from "./Viajes.jsx";
import { Footer } from "./Footer.jsx"
import { Fondo } from "./Fondo.jsx"

function App() {
  
  return (
    <>
      <Header/>
      <ForWhom/>
      <Introduccion/>
      <PerfilAcademico/>
      <PerfilLaboral/>
      <Viajes/>
      <Footer/>
    </>
    
  );
}

export default App