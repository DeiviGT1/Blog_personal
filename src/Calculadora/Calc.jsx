import { React, useState }  from "react"

import { Pantalla } from "./Pantalla"

function Calc (){
  const [state, setState] = useState(0)

  return(
    <>
      <div className="cajaContadorCalc container">
        <Pantalla
          numeroActual={state}/>

      </div>
    </>
  )
}

export { Calc }