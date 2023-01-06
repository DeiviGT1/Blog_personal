import { Pantalla } from "../ComponentesGenericos/Pantalla"
import { Tarea } from "./Tarea"
import { React, useState, useRef } from "react"
import { v4 as uuidv4 } from 'uuid';

function ListHw ( ) {

  const getData = () =>{
    if (localStorage.getItem("ITEMS")){
      const lStorage = JSON.parse(localStorage.getItem("ITEMS"))
      return lStorage
    } else {
      const lStorage = []
      return lStorage
    }
  }

  const [state, setState] = useState(getData())

  const inputEle = useRef(null);

  const AñadirTarea = (event) => {
    event.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: inputEle.current.value,
      completed: false
    }

    const tareasActualizadas = [tareaNueva, ...state]
    localStorage.setItem("ITEMS", JSON.stringify(tareasActualizadas))
    setState(tareasActualizadas)
  };

  const completarTarea = (id) =>{
    const tareasActualizadas = state.map(tarea => {
        if (tarea.id === id){
          tarea.completed = !tarea.completed
        }
        return tarea
      })
    localStorage.setItem("ITEMS", JSON.stringify(tareasActualizadas))
    setState(tareasActualizadas)
  }

  const eliminarTarea = (id) =>{
    console.log(state)
    let tareasActualizadas = state.filter(obj => obj.id !== id) 
    localStorage.setItem("ITEMS", JSON.stringify(tareasActualizadas))
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
    <button onClick={AñadirTarea}>Añadir tarea</button>
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