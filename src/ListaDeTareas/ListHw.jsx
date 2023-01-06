import { Pantalla } from "../ComponentesGenericos/Pantalla"
import { Tarea } from "./Tarea"
import { React, useState, useRef } from "react"
import { v4 as uuidv4 } from 'uuid';

function ListHw ( ) {
  

  const [state, setState] = useState([])

  const inputEle = useRef(null);
  
  const clic = (event) => {
    event.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: inputEle.current.value,
      completed: false
    }

    const tareasActualizadas = [tareaNueva, ...state]
    setState(tareasActualizadas)
  };

  const completarTarea = (id) =>{
    const tareasActualizadas = state.map(tarea => {
        if (tarea.id === id){
          tarea.completed = !tarea.completed
        }
        return tarea
      })
    setState(tareasActualizadas)
  }

  const eliminarTarea = (id) =>{
    let tareasActualizadas = state.filter(obj => obj.id !== id) 
    setState(tareasActualizadas)
    }
  

  return(
    <>
    <div className="cajaListaListHw container">
    <form action="">
    <input
      type="input"
      ref={inputEle}
    />
    <button onClick={clic}>Añadir tarea</button>
  </form>
      <div className="listaTareas">
        {state.map(tarea=>(
          <Tarea
            key = {tarea.id}
            completed = {tarea.completed} 
            id = {tarea.id}
            completarTarea={() => {completarTarea(tarea.id)}}
            eliminarTarea = {() =>{eliminarTarea(tarea.id)}}> {tarea.texto} </Tarea>
        ))}
      </div>
    </div>
    </>
  )
}

export {ListHw}