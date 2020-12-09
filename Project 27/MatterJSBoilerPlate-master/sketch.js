
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rop4,rop5;

function preload()
{

}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(800,400,70);
	bob2 = new Bob(730,400,70);
	bob3 = new Bob(660,400,70);
	bob4 = new Bob(870,400,70);
	bob5 = new Bob(940,400,70);
	roof = new Roof(800,150,400,30);

	Engine.run(engine);
  	// rope objs
	rope1 = new Rope(bob1.body,roof.body,3,0);
	rope2 = new Rope(bob2.body,roof.body,-70,0);
	rope3 = new Rope(bob3.body,roof.body,-140,0);
	rope4 = new Rope(bob4.body,roof.body,70,0);
	rope5 = new Rope(bob5.body,roof.body,140,0);
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

//   rope
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x: -850, y: 0})

	}
}



