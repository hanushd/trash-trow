var ball;
var bopa1,bopa2,bopa3;
var ground;

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

	ground = createSprite(400,790,800,20)

	ball = new Trash(700,650,20);

	bopa1 = new bin(500,400);
	bopa2 = new bin(550,350);
	bopa3 = new bin(400,300);

	Engine.run(engine);
  
}	

function draw() {
  background(255);

  //engine.update(engine);

  ball.display();

  bopa1.display();
  bopa2.display();
  bopa3.display();
 
   drawsprites();

}

function keyPressed(){
	 if (keyCode === UP_ARROW)
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85 });
	}

