import React from "react";
import ImagenFondo from "./assets/vista_ny.jpg"
import "./fondo.css"

function Fondo () {
  return(
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container-fluid contenedorFondo">
            <div className="backgroundColor" id="background-color">
              <img 
                src={ImagenFondo} 
                alt="" 
                className="imagenFondo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export {Fondo}