import {React, useState} from "react"
import { Pantalla } from "./Pantalla"
import { Boton } from "./Botones"

function Cont(){
  const [state, setState] = useState(0)

  const sumar = () =>{
    setState(state + 1)
  }

  const reiniciar = () =>{
    setState(0)
  }

  return(
    <>
    <div className="cajaContadorCont container">
      <Pantalla numeroActual={state}/>
      <Boton 
        botonSuma = {true}
        cambioClic={sumar}>
        Añadir a la cuenta
      </Boton>
      <Boton 
        botonSuma = {false}
        cambioClic={reiniciar}>
        Resetear
      </Boton>
    </div>
    </>
  )
}

export { Cont }