
var movingRect,fixedRect
var ball1
var ball2






function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(300, 100, 100, 60);
  fixedRect.shapeColor=("red");

  movingRect= createSprite(300,400,50,100);
  movingRect.shapeColor=("blue");

  fixedRect.velocityY=5;
  movingRect.velocityY=-5;

  ball1=createSprite(143,197,100,100)
  ball1.shapeColor="green";

  ball2=createSprite(100,200,100,100)
  ball2.shapeColor="white"
}

function draw() {
  background("yellow");  

ball2.x=mouseX;
ball2.y=mouseY;

if(isTouching(ball1,ball2)){
  ball1.shapeColor="brown";
  ball2.shapeColor="brown";
}
else{
  ball1.shapeColor="green";
  ball2.shapeColor="white";
}
bounceOff(movingRect,fixedRect);

    
  drawSprites();
  text(mouseX+','+mouseY,mouseX,mouseY);
}