import Luna from "./assets/icons/luna.png"
import Sol from "./assets/icons/sol.png"

function modo() {
  var modo_actual = document.getElementById("modo_actual_pagina");

  if (modo_actual.alt == "luna") {
    var nueva_pagina = Luna;
    var logo = "sol"
    var color_header = "navbar-light bg-light navbar-expand-lg ps-4 fixed-top"
    var color_header_2 = ""
    var background_color_title = "background-color: rgb(147, 147, 147); color: #343a40"
    var background_color = "height: 100%;width: 100%; position:fixed; z-index:auto;  background-color: white;"
    var background_boxes = "background-color:#dfdfdf; color: #202020"
    var flecha_color = "rotate: 22deg; height: 10%; filter: invert(0.60);"

  } else {
    var nueva_pagina = Sol;
    var logo = "luna"
    var color_header = "navbar-dark navbar-expand-lg ps-4 fixed-top"
    var color_header_2 = "background-color: #202020"
    var background_color_title = "background-color: #343a40; color: #dfdfdf"
    var background_color = "height: 100%;width: 100%; position:fixed; z-index:auto; background-color: black;"
    var background_boxes = "background-color: #202020; color: #dfdfdf"
    var flecha_color = "rotate: 22deg; height: 10%; filter: invert(0.75);"
  }
  
  document.getElementById("modo_actual_pagina").src = nueva_pagina;
  document.getElementById("modo_actual_pagina").alt = logo
  document.getElementById("header").className = color_header;
  document.getElementById("header").style = color_header_2;
  document.getElementById("background-color").style = background_color;
  [].forEach.call(document.querySelectorAll("#titulo"), function(ele){ele.style = background_color_title});
  [].forEach.call(document.querySelectorAll("#box"), function(ele){ele.style = background_boxes});
  document.getElementById("flecha-inicio").style = flecha_color
  return(
    <>
    </>
  )
}
export { modo }