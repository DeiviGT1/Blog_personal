import React from "react";
import { Link } from 'react-router-dom';

function ReactWeb() {
  return (
    <>
      <div className="container-fluid my-5 contenedores">
        <div className="row-12">
          <div className="col-12 p-0">
            <div className="container-fluid titulo" id="titulo">
              <h1 className="text-center p-4" id="react">
                React
              </h1>
            </div>
            <div className="container mt-5" id="box">
              <div className="row">
                <div className="col p-5">
                  <Link to="/contador"><h2>Contador</h2></Link> 
                  <p>
                    Esta fue la primera aplicacion que desarorolle, tiene un
                    codigo sencillo el cual tiene como objetivo añadir numeros
                    al darle clic al botón de añadir y tener otro boton que
                    reinicia la cuenta. En esta etapa se aprenden a manejar
                    pocos componenentes en los cuales se manejan estados
                  </p>
                </div>
              </div>
            </div>
            <div className="container mt-5" id="box">
              <div className="row">
                <div className="col p-5">
                <Link to="/calculadora"><h2>Calculadora</h2></Link> 
                  <p>
                    Con esta calculadora añadimos una mayor cantidad de
                    componentes en donde tenemos la oportunidad de utilizar los
                    props en ellos y realizar cambios a una mayor escala
                  </p>
                </div>
              </div>
            </div>
            <div className="container mt-5" id="box">
              <div className="row">
                <div className="col p-5">
                <Link to="/contador"><h2>Lista de tareas</h2></Link> 
                  <p>
                    Este proyecto tiene de objetivo usar herramientas nuevas
                    para manejar el estado, crear y eliminar tareas y usar el
                    LocalStorage para la persitencia de datos
                  </p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}

export { ReactWeb };
