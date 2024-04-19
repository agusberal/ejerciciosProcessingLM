let r = 255; // Rojo al máximo (255)
let g = 0;   // Verde al mínimo (0)
let b = 0;   // Azul al mínimo (0)

function setup() {
  createCanvas(400, 400);
  frameRate(1); // Establece la velocidad de actualización a 1 vez por segundo
}

function draw() {
  background(255); // Fondo blanco

  // Cambia el color entre rojo, verde y azul
  if (r === 255) {
    r = 0;
    g = 255;
  } else if (g === 255) {
    g = 0;
    b = 255;
  } else {
    r = 255;
    b = 0;
  }

  fill(r, g, b); // Rellena el rectángulo con el color generado
  rect(50, 50, 200, 100); // Dibuja un rectángulo en la posición (50, 50) con dimensiones 200x100
}
