import React from "react";
import { Carrusel } from "./Carrusel";

import banderas from "../../assets/banderas.jpg"
import cataratas from "../../assets/cataratas.jpg"
import david_beckham from "../../assets/david_beckham.jpg"
import hotel from "../../assets/hotel.jpg"
import loveism from "../../assets/loveism.jpg"
import puerto from "../../assets/puerto.jpg"


function Viajes(){
  const  fotografias = [banderas, cataratas, david_beckham, hotel, loveism, puerto]

  return(
    <>
    <div className="container-fluid mb-4  contenedores">
      <div className="row-12">
        <div className="col-12 p-0">
          <div className="container-fluid" id="titulo">
            <h1 
              className="text-center p-4" 
              id="viajes">
              Viajes</h1>
          </div>
          <div className="container p-5 mt-5" id="box">
            <div className="row">
              <div className="col">
                <p>
                  Esta sección la incluyo ya que considero importante mostrar
                  parte de mi vida personal y como disfruto mi tiempo libre cuando
                  puedo con una de las actividades que he encontrado en mi vida que
                  más me alegran, viajar.
                </p>
                <Carrusel
                imagenes = {fotografias}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export {Viajes}