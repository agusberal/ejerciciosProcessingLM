let angle = 0;
let radius = 100;
let r, g, b;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  r = map(cos(angle), -1, 1, 0, 255);
  g = map(sin(angle), -1, 1, 0, 255);
  b = map(cos(angle + PI / 2), -1, 1, 0, 255);
  background(255);
   // Cambia de color cada 2 segundos

  translate(width / 2, height / 2);

  let x = radius * cos(angle);
  let y = radius * sin(angle);

  stroke(r, g, b);
  line(0, 0, x, y);

  angle += radians(6); // Gira 6 grados por frame (como la aguja de un reloj)
}
