function Pantalla ( {numeroActual} ){
  return(
    <>
      <div className="container pantalla">
        <div className="row">
          <div className="col">
            <p>
              {numeroActual}
            </p>
          </div>
        </div>
      </div>    
    </>
  )
}

export { Pantalla }