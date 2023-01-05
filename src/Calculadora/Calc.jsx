import { React, useState }  from "react"
import math from "mathjs"
import { Boton } from "./Boton"
import { Pantalla } from "./Pantalla"

function Calc (){
  const [state, setState] = useState(0)

  const numbers = Array.from(Array(10).keys());

  const settingState = (number) =>{
    setState(number)
  }

  return(
    <>
      <div className="cajaContadorCalc container">
        <Pantalla
          numeroActual={state}/>
            <div className="botonesCalc">
              {numbers.map(number =>(
                <Boton
                key={number}
                cambioClic={() => {settingState(number)}}>
                  {number}
                </Boton>
              ))}
            </div>
      </div>
    </>
  )
}

export { Calc }