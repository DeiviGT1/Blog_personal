import React from "react";
import ImagenFondo from "./assets/vista_ny.jpg"
import "./fondo.css"

function Fondo () {
  return(
    <>
    <img 
      src={ImagenFondo} 
      alt="" 
      className="imagenFondo"
    />
    </>
  )
}

export {Fondo}