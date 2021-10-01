var path, pathIMG;
var boy, boyIMG;
var leftBoundry, rightBoundry;

function preload(){
  //pre-load images
  pathIMG = loadImage("path.png");
  boyIMG = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathIMG);
  path.scale = 1.2;
  path.velocityY = 4;

  //create boy sprite
  boy = createSprite(180, 340, 30, 30);
  boy.scale = 0.08;
  boy.addAnimation("running", boyIMG);

  // create the boundries
  leftBoundry = createSprite(0, 0, 100, 800);
  leftBoundry.visible = false;
  rightBoundry = createSprite(410, 0, 100, 800);
  rightBoundry.visible = false;
}

function draw() {
  background(0);
  edges = createEdgeSprites();
    boy.collide(leftBoundry);
    boy.collide(rightBoundry);
    
  

  //code to reset the background
  if(path.y > 400){
    path.y = height/2;
  }
  boy.x = World.mouseX;

  drawSprites();
}