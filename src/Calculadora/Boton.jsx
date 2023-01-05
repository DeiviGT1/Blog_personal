function Boton ( { children, cambioClic, botonNum } ) {

  return (
    <>
    <button
      className= {botonNum ? "botonNum" : "botonOp"}
      onClick={cambioClic}>
      {children}
    </button>
    </>
  )
}

export {Boton}