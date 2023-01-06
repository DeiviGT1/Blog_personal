function Tarea ( {children, completed, completarTarea, eliminarTarea} ){

  return (
    <>  
    <div className="tarea">
      <a onClick={completarTarea}>
        <p className={completed ? "tareaCompletada" : "tareaporCompletar" }>
          {children}
        </p>
      </a>
      <p className="tareaImg" onClick={eliminarTarea}>❌</p>
    </div>
    </>
  )
}

export {Tarea}