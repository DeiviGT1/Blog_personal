import { Header } from "../ComponentesGenericos/Header.jsx"
import { Footer } from "../ComponentesGenericos/Footer.jsx"
import { Titulo } from "../ComponentesGenericos/Titulo.jsx"
import { Cont } from "./Cont.jsx"

function Contador(){
  
  return(
    <>
    <Header/>
      <Titulo texto = {"Contador"}/>
        <div className="fondo">
          <Cont/>
        </div>
    <Footer/>
    </>
    
  )
}

export {Contador}