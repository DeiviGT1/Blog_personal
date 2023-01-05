function Boton ( { children, cambioClic, botonSuma } ) {

  return (
    <>
    <button
      className= {botonSuma ? "botonSuma" : "botonReinicio"}
      onClick={cambioClic}>
      {children}
    </button>
    </>
  )
}

export {Boton}