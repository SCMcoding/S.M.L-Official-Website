//add a listener to your document to handle onload eventsâ€¦ set it to run your main function
document.addEventListener('DOMContentLoaded', main);

//declare variables for canvas element, drawing instrument
var whoissam;
var sketch;
var w, sw;

// speed
var dx = 4.0;

//delay in ms before your animate function is called.
var fps = 10;

// bounce coefficient
var bfx = 0.95;
var bfxa = 0.999;
var treshold = 0.01;

//keeps track of your animation
var animation;
var ai = 0;
var maxai = 1000;

function main() {
  whoissam = $('#whoissam');
  sketch = $('#sketch');
  w = whoissam.width();
  sw = sketch.width();
  console.log(w + " - " + sw);

  animation = setInterval(animate, fps);
}

function animate() {
  ai++;
  if (ai >= maxai) clearInterval(animation);

  var x = $(whoissam).offset().left;
  console.log("ai: " + dx + " [x = " + x + " ]")

  // air friction
  dx = dx * bfxa;
  if (Math.abs(dx) < treshold) {
    clearInterval(animation);
  }

  if (x + w >= sw) {
    dx = -(dx * bfx);
    x = sw - w;
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> br: " + dx)
  }

  if (x < 0) {
    dx = -(dx * bfx);
    x = 0
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< bl: " + dx)
  }

  x = x + dx;
  console.log("set x = " + x);
  $(whoissam).offset({
    'left': x
  });
}
