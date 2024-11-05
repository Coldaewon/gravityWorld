let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0.3);
  ball.addForce(gravity);

  if(mouseIsPressed){
    
    let shooting = createVector(1, 1);
    ball.addForce(shooting);
  }

  ball.update();
  ball.show();
  
}

