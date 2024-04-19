function setup() {
  createCanvas(400, 400);
  background(220);
  stroke(0); 
  strokeWeight(2); // Grosor de las líneas
}

function draw() {
  // "L"
  line(100, 100, 100, 200);
  line(100, 200, 150, 200);
  // line(x1, y1, x2, y2)
  // "M"
  line(250, 100, 250, 200);
  line(250, 100, 275, 150);
  line(275, 150, 300, 100);
  line(300, 100, 300, 200);
}
