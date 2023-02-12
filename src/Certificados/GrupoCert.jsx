import React, { useState } from 'react';
import despliegue from "../assets/icons/despliegue.png"
import { Cert} from "./Cert.jsx"

function GrupoCert ( { titulo, lstTitles, lstImages, lstDescs, len } ) {

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
          {len.map((item) => (
          <Cert
            titulo={lstTitles[item]}
            descripcion = {lstDescs[item]}
            imagen = {lstImages[item]}
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