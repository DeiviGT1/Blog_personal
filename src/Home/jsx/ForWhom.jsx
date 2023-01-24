import React from "react";
import flecha from "../../assets/icons/flechas.png";

function ForWhom() {
  return (
    <>
      <div className="container-fluid  contenedores">
        <div className="row-12">
          <div className="col-12 p-0">
            <div className="container-fluid p-0" id="titulo">
              <h1 className="text-center p-4">
                ¿Para quién es esto y cuál es el objetivo?
              </h1>
            </div>
            <div className=" pt-3">
              <div className="row mx-auto" id="contenedor-flecha">
                <img src={flecha} id="flecha-inicio" alt="flecha" />
              </div>
            </div>
            <div className="container p-3" id="box">
              <div className="row">
                <div className="col mx-2 px-5 mx-lg-5">
                  <p>
                    ¡Bienvenidos a mi blog! Mi nombre es Jose David Gonzalez y
                    tengo 22 años. Actualmente soy estudiante de ingeniería
                    administrativa y también me considero un apasionado de la
                    tecnología y las herramientas avanzadas de programación como
                    Python y Javascript. Sin embargo, hay algo más que me
                    impulsa: una incansable sed de conocimiento y una mente
                    curiosa. He dedicado mi vida a aprender y a superarme
                    constantemente, y he descubierto que el camino hacia el
                    éxito está lleno de desafíos y oportunidades. Mi habilidad
                    para adaptarme rápidamente y mi trabajo duro han sido clave
                    en mis anteriores experiencias laborales. <br />
                    <br />
                    Así mismo este blog es útil para demostrar buenas prácticas
                    y practicidad en posibles opciones laborales futuras.
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

export { ForWhom };
