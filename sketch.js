const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, trashball ,ground1;

var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

	dustbin = new bin(1200,650);

	trashball = new Trash(200,450,40);

	ground1 = new Ground(width/2,670,width,20);  
	    
 }

 function draw() {
    rectMode(CENTER);
    background(0);
 
   dustbin.display();
   trashball.display();
   ground1.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(trashball.body,trashball.body.position,{x:85,y:-85});
    
  	}
}

