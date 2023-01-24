import React, { useState } from 'react';
import despliegue from "../assets/icons/despliegue.png"
import { Cert} from "./Cert.jsx"

function GrupoCert ( { titulo, lst } ) {

  const [certificados, setCertificados] = useState(true);

  function onclick(){
    console.log(certificados)
    setCertificados(!certificados);
}

  return(
    <>
      <div className="seccion">
        <div className="subtitulo">
          <a> 
            <img className={certificados ? "despliegue" : "despliegueFalse"} 
            src={despliegue} 
            onClick={onclick}/> 
          </a>
          <h2 className="titulo">{titulo}</h2>
        </div>
        <div className='GrupoCertificados'>
          {lst.map((item) => (
          <Cert
            titulo={"certificado"}
            descripcion = {"certificado"}
            imagen = {item}
            key = {item}
            estado = {certificados}
            />
            ))}
        </div>
    </div>
  </>
  )
}

export { GrupoCert }