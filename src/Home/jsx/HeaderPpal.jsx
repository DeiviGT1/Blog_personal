import React from "react";
import inicio from "../../assets/icons/inicio.png" 
import luna from "../../assets/icons/luna.png"
import { modo } from "../../ComponentesGenericos/indexwebpage"

function HeaderPpal() {
    return(
        <header className="navbar-dark navbar-expand-lg ps-4 fixed-top header" id="header">
          <nav className="navbar navbar-expand-lg">
            <a href="#" className="navbar-brand mr-3" id="inicio">
              <img 
                src={inicio} alt="" 
                id="imagenInicio"/>
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbar" 
              aria-controls="#navbar"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-md-2 mr-0">
                <li className="nav-item">
                  <a 
                  className="nav-link"
                  href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a 
                  className="nav-link"
                  href="#introduccion">Introduccion</a>
                </li>
                <li className="nav-item">
                  <a 
                  className="nav-link"
                  href="#perfilAcademico">Perfil academico</a>
                </li>
                <li className="nav-item">
                  <a 
                  className="nav-link"
                  href="#perfilLaboral">Perfil laboral</a>
                </li>
                <li className="nav-item">
                  <a 
                  className="nav-link"
                  href="#viajes">Viajes</a>
                </li>
                <li className="nav-item">
                  <a 
                  className="nav-link"
                  href="#react">Proyectos</a>
                </li>
                <li className="nav-item">
                  <a 
                  className="nav-link"
                  href="http://spotify-env-1.eba-3qbsrs2p.us-east-1.elasticbeanstalk.com/"
                  target="_blank">API Spotify</a>
                </li>
              </ul>
              <form className="d-flex ms-auto p-2 pe-5 bd-highlight my-2 my-lg-0">
                <input 
                className="form-control mr-sm-2"
                type="search" 
                placeholder="Busqueda"
                aria-label="Search"/>
                <button
                  className="btn btn-outline-success my-2 offset-1 my-sm-0"
                  type="submit"> Busqueda
                </button>
              </form>
              <a 
              className="nav-link d-none d-md-block"
              href="#">
                <img 
                  src={luna} 
                  alt="modo" 
                  id="modo_actual_pagina"
                  onClick={modo}/>
              </a>
            </div>
          </nav>    
        </header>
    )
}

export {HeaderPpal}