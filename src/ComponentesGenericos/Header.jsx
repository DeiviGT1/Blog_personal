import React from "react";
import inicio from "../assets/icons/inicio.png" 
import luna from "../assets/icons/luna.png"
import { modo } from "./indexwebpage"

function Header() {
    return(
        <header className="navbar-dark navbar-expand-lg ps-4 fixed-top header" id="header">
          <nav className="navbar navbar-expand-lg">
            <a href="/" className="navbar-brand mr-3 HeaderGenericos" id="inicio">
                <img 
                  src={inicio} alt="" 
                  id="imagenInicio"/>
              <h3> ↩️ Regresar al inicio  </h3>
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

export {Header}