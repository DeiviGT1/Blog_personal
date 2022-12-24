// Funcion para trasladar en el eje Y
var modo_actual = document.getElementById("modo_actual_pagina");

function displayScrollPosition() {
  // Get the current scroll position
  var scrollPosition = window.pageYOffset;
  // Display the scroll position in the console
  fondo = document.getElementById("background-color")
  limite = document.getElementById("viajes").offsetTop
  
  // Update the scroll position every time the function is called
  window.addEventListener('scroll', displayScrollPosition);
  if (scrollPosition >= limite){
    display = "height: 10px;width: 10px; position:absolute; z-index:auto; background-color: black;"
    fondo.style = display
  } 
    else {
      if (modo_actual.src.substr(modo_actual.src.length - 8) == "luna.png"){
        
        var background_color = "height: 100%;width: 100%; position:fixed; z-index:auto;  background-color: black;"
      }
      else {
        
        var background_color = "height: 100%;width: 100%; position:fixed; z-index:auto; background-color: white;"
      }
      document.getElementById("background-color").style = background_color;
    }
}
displayScrollPosition();


// Funcion para cambiar una imagen

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

function modo() {
  
  console.log("hola")
  if (modo_actual.src.substr(modo_actual.src.length - 8) == "luna.png") {
    var nueva_pagina =
      window.location.href.substr(
        0,
        getPosition(window.location.href, "/", 3)
      ) + "/assets/icons/sol.png";
    var color_modo = "filter: invert(0); height: 45px;"
    var color_header = "navbar-light bg-light navbar-expand-lg ps-4 fixed-top"
    var color_header_2 = ""
    var background_color_title = "background-color: rgb(147, 147, 147); color: #343a40"
    var background_color = "height: 100%;width: 100%; position:fixed; z-index:auto;  background-color: white;"
    var background_boxes = "background-color:#dfdfdf; color: #202020"
    var flecha_color = "rotate: 22deg; height: 10%; filter: invert(0.60);"

  } else {
    var nueva_pagina =
      window.location.href.substr(0, getPosition(window.location.href, "/", 3)) + "/assets/icons/luna.png";
    var color_header = "navbar-dark navbar-expand-lg ps-4 fixed-top"
    var color_header_2 = "background-color: #202020"
    var color_modo = "filter: invert(1); height: 45px;"
    var background_color_title = "background-color: #343a40; color: #dfdfdf"
    var background_color = "height: 100%;width: 100%; position:fixed; z-index:auto; background-color: black;"
    var background_boxes = "background-color: #202020; color: #dfdfdf"
    var flecha_color = "rotate: 22deg; height: 10%; filter: invert(0.75);"
  }
  //
  
  document.getElementById("modo_actual_pagina").src = nueva_pagina;
  document.getElementById("modo_actual_pagina").style = color_modo
  document.getElementById("header").className = color_header;
  document.getElementById("header").style = color_header_2;
  document.getElementById("background-color").style = background_color;
  [].forEach.call(document.querySelectorAll("#titulo"), function(ele){ele.style = background_color_title});
  [].forEach.call(document.querySelectorAll("#box"), function(ele){ele.style = background_boxes});
  document.getElementById("flecha-inicio").style = flecha_color
  document.getElementById("inicio").style = color_modo
  
}



// Close modal
