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

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}


// Funcion para cambiar una imagen

function modo() {
  var modo_actual = document.getElementById("modo_actual_pagina");
  if (modo_actual.src.substr(modo_actual.src.length - 8) == "luna.png") {
    var nueva_pagina =
      window.location.href.substr(
        0,
        getPosition(window.location.href, "/", 3)
      ) + "/assets/icons/sol.png";
  } else {
    var nueva_pagina =
      window.location.href.substr(
        0,
        getPosition(window.location.href, "/", 3)
      ) + "/assets/icons/luna.png";
  }
  
  document.getElementById("modo_actual_pagina").src = nueva_pagina;
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})