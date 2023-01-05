function Boton ( { children, cambioClic, botonNum ,botonEq } ) {

  return (
    <>
    <button
      className= {botonNum ? "botonNum" : botonEq ? "botonEq" : "botonOp"}
      onClick={cambioClic}>
      {children}
    </button>
    </>
  )
}

export {Boton}