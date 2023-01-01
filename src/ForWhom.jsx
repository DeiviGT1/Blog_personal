import React from "react";
import { Header } from "./Header";
import "./forWhom.css"
import flecha from "./assets/icons/flechas.png"

function ForWhom() {
  return(
      <>
      <Header/>
      <div className="container-fluid  contenedores">
        <div className="row-12">
          <div className="col-12 p-0">
            <div className="container-fluid p-0" id="titulo">
              <h1 className="text-center p-4">
              ¿Para quién es esto y cuál es el objetivo?
              </h1>
            </div>
            <div className="container pt-3">
              <div className="row mx-auto" id="contenedor-flecha">
                <img 
                  src={flecha}
                  id="flecha-inicio"
                  alt="flecha"/>
              </div>
            </div>
            <div className="container p-3" id="box">
              <div className="row">
                <div className="col mx-2 px-5 mx-lg-5">
                  <p>
                    Este blog tiene como objetivo principal retarme a mí mismo a
                    demostrar mi capacidad de aprendizaje con diversas habilidades
                    respecto al desarrollo web, es un primer paso al mundo del desarrollo
                    y una muestra de una alta capacidad de aprendizaje a corto plazo
                    teniendo en cuenta el tiempo de trabajo que tardo en realizarse.
                    Es un boceto inicial que tiene como siguiente reto, el desarrollo
                    de aplicación móvil. <br />
                    <br />
                    Así mismo este blog es útil para demostrar buenas prácticas y
                    practicidad en posibles opciones laborales futuras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export {ForWhom}