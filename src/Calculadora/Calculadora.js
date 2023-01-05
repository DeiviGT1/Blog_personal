import { Header } from "../ComponentesGenericos/Header.jsx"
import { Footer } from "../ComponentesGenericos/Footer.jsx"
import { Titulo } from "../ComponentesGenericos/Titulo.jsx"
import { Calc } from "./Calc.jsx"

function Calculadora () {
  

  return(
    <>
      <Header/>
      <Titulo
        texto = "Calculadora"/>
        <div className="fondo">
          <Calc/>
        </div>
      <Footer/>
    </>
  )
}

export { Calculadora }