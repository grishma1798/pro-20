
function preload()
{
  bath = loadAnimation("bath1.png","bath2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  iss = loadImage("iss.png");
  move = loadAnimation("move.png","move1.png");
  sleep = loadImage("sleep.png")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut = createSprite(300,230);
  astronaut.addAnimation(sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}