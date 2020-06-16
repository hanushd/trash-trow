var ball;
var bopa1,bopa2,bopa3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	ball = new Trash(700,650);

	bopa1 = new bin(500,400);
	bopa2 = new bin(550,350);
	bopa3 = new bin(400,300);

	Engine.run(engine);
  
}	

function draw() {
  background(0);
  engine.update(engine);

  ball.display();

  bopa1.display();
  bopa2.display();
  bopa3.display();
  
  drawSprites();
 
}

function keyPressed(){
	 if (keyCode === UP_ARROW)
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85 });
	}

