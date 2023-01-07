import React from "react"
// import fotoPersonal from "../../assets/foto_personal.jpg"


function Introduccion () {
  return(
    <>
    <div className="container-fluid contenedores">
      <div className="row-12">
        <div className="col-12 p-0">
          <div className="container-fluid" id="titulo">
            <h1 
              className="text-center p-4"
              id="introduccion">
              Introduccion
            </h1>
          </div>
          <div className="container p-4 mt-5 mb-5 pl-5" id="box">
            <div className="row">
              <div className="col-12 col-lg-4 ml-4 pl-4 ml-lg-0">
                <img 
                  src="HOLA"
                  alt="fotoPersonal" 
                  id="fotoPersonal"/>
              </div>
              <div className="col-11 col-lg-7 mt-5 ml-3 ml-lg-0 m-0 mt-lg-0 align-self-center py-3 cajaTexto">
              <p>
                La idea principal del blog es demostrar habilidades de
                desarrollo web, tanto en la parte de Frontend como Backend
                para posibles cargos de Fullstack dada la necesidad del mismo.
                De igual forma en el blog presento diversos proyectos de Data
                Science que he realizado tanto en el ámbito laboral como
                académico, estos códigos pueden ser revisados en el Github
                personal. <br />
                <br />
                Adicionalmente, se demuestran grupos académicos a los que he
                pertenecido con desarrollos realizados para el fortalecimiento
                de habilidades blandas y actividades extracurriculares en el
                desarrollo de las mismas.<br />
                <br />
                Por último, el blog contiene experiencias propias en una de
                mis actividades favoritas, viajar, cuenta con anécdotas y
                fotografías a modo de recuerdo personal que quiero dejar
                plasmado en el proyecto y así poder tenerlo presente en un
                futuro<br />
                <br />
                Las redes sociales laborales y académicas se encuentran al final de la pagina
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

export {Introduccion}