import { Header } from "../ComponentesGenericos/Header.jsx"
import { Footer } from "../ComponentesGenericos/Footer.jsx"
import { Titulo } from "../ComponentesGenericos/Titulo.jsx"
import { ListHw } from "./ListHw.jsx"

function ListaDeTareas (){
  return(
    <> 
    <Header/>
    <Titulo
      texto = "Lista de tareas"/>
      <div className="fondo">
          <ListHw/>
        </div>
    <Footer/>  
    
    
    </>
  )
}

export {ListaDeTareas}