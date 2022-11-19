// Source credit: http://thenewcode.com/279/Rotate-Elements-on-Scroll-with-JavaScript

var leftItem = document.getElementById('item0');
(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
  
  leftItem.style.transform = "rotate(-" + window.pageYOffset + "deg)";
})

////////////////////////////////////////////////////////////
var item = documentgetElementById("foto_ny");
(function(){
    
})
