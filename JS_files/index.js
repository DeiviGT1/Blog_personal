var imagen = document.getElementById('imagen');

    (function(){
        var regulador = function(type,name){
            var running = false;    
            var func = function(){
                if (running){ return;}
                running = true;
                requestAnimationFrame(function(){
                    window.dispatchEvent(new CustomEvent(name))
                    running=false
                });
            };
            window.addEventListener(type, func)
        };
        regulador("scroll", "optimizedScroll")
    })();

window.addEventListener("optimizedScroll", function(){
    imagen.style.transform = "translateY(-" + window.pageYOffset + "px)";
})