import { Pantalla } from "../ComponentesGenericos/Pantalla"
import { AñadirTarea } from "./AñadirTarea"
import { Tarea } from "./Tarea"
import { React, useState, useRef } from "react"

var tareas = [
  "Tarea1", "Tarea2", "Tarea3", "Tarea4"
]

function ListHw ( {children} ) {
  

  const [state, setState] = useState(tareas)

  const inputEle = useRef(null);

  const clic = (event) => {
    event.preventDefault();
    tareas.push(inputEle.current.value)
    console.log(tareas)
    setState(tareas)
  };

  return(
    <>
    <div className="cajaListaListHw container">
      
        {/* <AñadirTarea> ¿Añadir tarea? </AñadirTarea> */}
        <form action="">
        <input
          type="input"
          ref={inputEle}
        />
        <button onClick={clic}>{children}</button>
      </form>
      {state.map(tarea=>(
        <Tarea
          key={tarea}> {tarea} </Tarea>
      ))}
    </div>
    </>
  )
}

export {ListHw}