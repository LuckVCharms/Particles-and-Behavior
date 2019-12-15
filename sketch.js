let particlesQuantity = 20000;

let positionX = new Array(particlesQuantity);
let positionY = new Array(particlesQuantity);
let velocityX = new Array(particlesQuantity).fill(0);
let velocityY = new Array(particlesQuantity).fill(0);

/////////////////////
///// # Setup # /////
/////////////////////

function setup(){
 createCanvas(windowWidth, windowHeight);
 stroke(255, random(50, 150), random(20, 200));
 
 for(let particle = 1; particle < particlesQuantity; particle++){
  positionX[particle] = random(100, width-100);
  positionY[particle] = random(200, height-200);
 }
 
 positionX[0] = 0;
 positionY[0] = 0;
}
////////////////////
///// # Draw # /////
////////////////////

function draw(){
 background(80);
 
 velocityX[0] = velocityX[0] * 0.8 + (mouseX - positionX[0]) * 0.12;
 velocityY[0] = velocityY[0] * 0.8 + (mouseY - positionY[0]) * 0.12;
 
 positionX[0] += velocityX[0];
 positionY[0] += velocityY[0];
 
 for(let particle = 1; particle < particlesQuantity; particle++){
  let whatever = 1024 / (sq(positionX[0] - positionX[particle]) + sq(positionY[0] - positionY[particle]));
  
  velocityX[particle] = velocityX[particle] * 0.1 + (velocityX[0] - velocityX[particle]) * whatever;
  velocityY[particle] = velocityY[particle] * 0.1 + (velocityY[0] - velocityY[particle]) * whatever;
  
  positionX[particle] += velocityX[particle];
  positionY[particle] += velocityY[particle];
  
  if((positionX[particle] < 0 && velocityX[particle] < 0) || (positionX[particle] > width && velocityX[particle] > 0)){
   velocityX[particle] = -velocityX[particle];
  }
  
  if((positionY[particle] < 0 && velocityY[particle] < 0) || (positionY[particle] > height && velocityY[particle] > 0)){
   velocityY[particle] = -velocityY[particle];
  }
  
  point(positionX[particle], positionY[particle]);
 }
}

////////////////////////////////
///// # Custom Functions # /////
////////////////////////////////

// Reset on Mouse Click //

function mousePressed(){
 for(let particle = 1; particle < particlesQuantity; particle++){
  positionX[particle] = random(100, width-100);
  positionY[particle] = random(200, height-200);
 }
}
