const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
roofObject = new Roof(797, 275, 229,20);

bobDiameter=40;




 
bobObject1 = new bob (800-bobDiameter*2,675,bobDiameter);  
bobObject2 = new bob (800-bobDiameter,675,bobDiameter);
bobObject3 = new bob (800,675,bobDiameter);
bobObject4 = new bob (800+bobDiameter,675,bobDiameter);
bobObject5 = new bob (800+bobDiameter*2,675,bobDiameter);

rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);

rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter, 0);
rope3=new rope(bobObject3.body,roofObject.body,0, 0);
rope4=new rope(bobObject4.body,roofObject.body,bobDiameter, 0);
rope5= new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  

  keyPressed();
 

  drawSprites();
 
}


function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-2,y:-0});

}


}
