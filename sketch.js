
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
 
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1=new Ground (width/2,heght-35,width,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  drawSprites();
 
}



