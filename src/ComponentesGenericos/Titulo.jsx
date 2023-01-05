import React from "react";

function Titulo( {texto} ){

  return(
    <>
    <div className="container-fluid contenedores p-0" id="titulo">
        
        <div className="row-12" id="titulo">
          <div className="col-12 p-0" id="titulo">
            <div className="container-fluid p-0" id="titulo">
              <h1 className="text-center p-4">
                {texto}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {Titulo}