let angulo = 0; // Ángulo inicial
let anguloVel = 0.01; // Velocidad angular
let armLength = 150; // Longitud del péndulo
let pivotX = 200;
let pivotY = 200;


function setup() {
     createCanvas(400, 400);
    
}


function draw() {
   background(0);

    let x = pivotX + armLength * cos(angulo);
    let y = pivotY + armLength * sin(angulo);

    stroke(255);
    line(pivotX, pivotY, x, y);

    angulo += anguloVel;
}
