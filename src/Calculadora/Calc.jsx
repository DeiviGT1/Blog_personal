import { React, useState }  from "react"
import {evaluate} from "mathjs"
import { Boton } from "./Boton"
import { Pantalla } from "../ComponentesGenericos/Pantalla"

function Calc (){
  const [state, setState] = useState(0)

  const numbers = [7,8,9,4,5,6,1,2,3,0]

  const setNumber = (number) =>{
    if (state !== 0){
      setState(state.toString() + number.toString())
    } else {
      setState(number)
    }
  }

  const resultado = () => {
    setState(evaluate(state))
  }

  const ce = () => {
    setState(0)
  }

  return(
    <>
      <div className="cajaCalculadoraCalc container">
        <Pantalla
          numeroActual={state}/>
            <div className="botonesCalc">
              {numbers.map(number =>(
                <Boton
                key={number}
                cambioClic={() => {setNumber(number)}}
                botonNum = {true}>
                  {number}
                </Boton>
              ))}
              <Boton
                botonNum = {false}
                botonEq = {true}
                cambioClic = {resultado}
                > = </Boton>
              <Boton
               cambioClic={() => {setNumber(".")}} > . </Boton>
              <Boton
              cambioClic={() => {setNumber("+")}}> + </Boton>
              <Boton
              cambioClic={() => {setNumber("-")}}> - </Boton>
              <Boton
              cambioClic={() => {setNumber("*")}}> * </Boton>
              <Boton
              cambioClic={() => {setNumber("/")}}> / </Boton>
              <Boton
              cambioClic={ce}> CE </Boton>
              
            </div>
      </div>
    </>
  )
}

export { Calc }