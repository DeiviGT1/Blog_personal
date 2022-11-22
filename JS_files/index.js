// Funcion para trasladar en el eje Y

var imagen = document.getElementById("imagen");

(function () {
  var regulador = function (type, name) {
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        window.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    window.addEventListener(type, func);
  };
  regulador("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function () {
  imagen.style.transform = "translateY(-" + window.pageYOffset + "px)";
});

// Funcion para color fondo entero

function modo() {
  var modo_actual = document.getElementById("modo_actual_pagina");
  if (modo_actual.src.substr(modo_actual.src.length - 8) == "luna.png") {
    
    var nueva_pagina = document
      .getElementById("modo_actual_pagina")
      .src.substr(
        -document.getElementById("modo_actual_pagina").src.length,
        document.getElementById("modo_actual_pagina").src.length - 8
      ) + "sol.png";
  } else {
    var nueva_pagina = document
      .getElementById("modo_actual_pagina")
      .src.substr(
        -document.getElementById("modo_actual_pagina").src.length,
        document.getElementById("modo_actual_pagina").src.length - 8
      ) + "luna.png";
  }
  return nueva_pagina;
}
