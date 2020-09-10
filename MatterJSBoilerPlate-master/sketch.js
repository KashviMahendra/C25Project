
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var dustbin, paper, ground;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin = new Dustbin(1200, 650);
paper = new Box(200, 450, 40, 40);
ground = new Ground(800, 670, 1600, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbin.display();
  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 60, y : -60})
	}
}



