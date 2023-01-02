import React from "react";
import "./perfilacademico.css"

function PerfilAcademico () {
  return(
    <>
    <div className="container-fluid contenedores">
      <div className="row-12">
        <div className="col-12 p-0">
          <div className="container-fluid titulo">
            <h1 className="text-center p-4">
              Perfil academico
            </h1>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-4 col-12 pt-5 pt-lg-3 estudio">
                <h2>Universidad nacional de Colombia</h2>
                <h4>Ing. administrativa</h4>
                <h4>Enero 2018 - Octubre 2023</h4>
                <p>
                  Estudiante de ingeniería administrativa con cursos aprobados
                  en materias financieras y de desarrollo matemático cognitivo
                  con enfoque en el desarrollo de proyectos, análisis de datos y
                  negocios internacionales.
                </p>
              </div>
              <div className="col-lg-4 col-12 pt-5 pt-lg-3 estudio">
                <h2>Colegio panamericano colombo sueco</h2>
                <h4>Bachiller</h4>
                <h4>Noviembre 2017</h4>
                <p>
                  Enfocado en valores morales y éticos muy importantes para el
                  desarrollo como persona integral a la hora de desarrollar
                  diversas actividades
                </p>
              </div>
            
              <div className="col-lg-4 col-12 pt-5 pt-lg-3 estudio">
                <h2>Plataforma de cursos Coursera</h2>
                <br />
                <h4>Junio 2020 - Marzo 2022</h4>
                <p>
                  5 cursos especializados con énfasis en Excel avanzado, Power BI,
                  Python y el análisis de datos certificados por la universidad de
                  Michigan, la universidad de Macquiarie y Google
                </p>
              </div>
            </div>
            <div className="row mt-5 pt-5 mb-2">
              <h1 className="mb-5 experiencias">Experiencias extracurriculares</h1>
            </div>
            <div className="row experiencias">            
              <div className="col-6">
                <h2>ANEIAP</h2>
                <p className="p-5">
                  Grupo estudiantil para estudiantes de ingenieria administrativa,
                  industrial y de procesos, en el cual desempeñe cargos de liderazgo
                  para el desarrollo de eventos como lo fue el SAIO 2018. <br/>
                  Adicionalmente trabaje con herramientas como Adobe Illustrator
                  para el desarrollo de piezas publicitarias de la asociación
                </p>
              </div>
              <div className="col-6">
                <h2>Waterpolo</h2>
                <p className="p-5">
                  Desde joven pertenecí a un equipo de waterpolo, demostrando gran
                  disciplina con los entrenamientos y destacando como jugador clave
                  del equipo que en cierto punto ayudó al entrenador con el grupo de
                  jovenes que estaban iniciando en el deporte, enseñandoles las reglas y
                  algunas estrategias de juego acordes a su edad
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

export {PerfilAcademico}