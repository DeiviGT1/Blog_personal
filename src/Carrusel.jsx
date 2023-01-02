import {React, useState, useEffect} from "react";


function Carrusel ( props ){
  
  const [imagen, setImagen] = useState(0)

  const imagenPrevia = () => {
    const ultimoIndex = props.imagenes.length - 1;
    const resetearIndex = imagen === 0;
    const index = resetearIndex ?  ultimoIndex : imagen - 1;
    setImagen(index)
  }

  const imagenSiguiente = () =>{
    const ultimoIndex = props.imagenes.length - 1;
    const resetearIndex = imagen === ultimoIndex;
    const index = resetearIndex ?  0 : imagen + 1;
    setImagen(index)  
  }
  
  return(
    <>
    <div className="carrusel">
      <button 
        className="botonCarrusel" 
        onClick={imagenPrevia}>
        Previo
      </button>
      <button 
        className="botonCarrusel" 
        onClick={imagenSiguiente}>
        Siguiente
      </button>
      <img 
        src={props.imagenes[imagen]} 
        className="imagenCarrusel"/>
      
    </div>
    </>
  )
}

export {Carrusel}