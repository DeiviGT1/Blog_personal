import { HeaderPpal } from "./jsx/HeaderPpal.jsx"
import {ForWhom} from "./jsx/ForWhom.jsx"
import {Introduccion} from "./jsx/Introduccion.jsx"
import {PerfilAcademico} from "./jsx/PerfilAcademico.jsx"
import { PerfilLaboral } from "./jsx/PerfilLaboral.jsx";
import { Viajes } from "./jsx/Viajes.jsx";
import { Footer } from "../ComponentesGenericos/Footer.jsx"
import { Fondo } from "./jsx/Fondo.jsx"
import { ReactWeb } from "./jsx/React.jsx"

import "../App.css"

function Home(){
  return (
    <>
      <Fondo/>
      <HeaderPpal/>
      <ForWhom/>
      <Introduccion/>
      <PerfilAcademico/>
      <PerfilLaboral/>
      <Viajes/>
      <ReactWeb/>
      <Footer/>
    </>
  )
}

export { Home }