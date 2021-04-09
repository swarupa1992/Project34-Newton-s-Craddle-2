
//Project 34


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//const MouseConstraint = Matter.MouseConstraint;
//const Mouse = Matter.Mouse;

var bob1,bob2,bob3,bob4,bob5;


function setup() {

	createCanvas(windowWidth/2, windowHeight/1.5);

	engine = Engine.create();
	world = engine.world;

/*let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
    mouse : canvasmouse
}

mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint);*/

	bob1 = new Bob(300,300); 
    bob2 = new Bob(350,300);//250
	bob3 = new Bob(400,300); //300
    bob4 = new Bob(450,300);//350
	bob5 = new Bob(500,300);  //400
    
	roof1 = new Roof();
	
	rope1 = new Rope(bob1.body,{x:200,y:100});
    rope2 = new Rope(bob2.body,{x:250,y:100});
    rope3 = new Rope(bob3.body,{x:300,y:100});
    rope4 = new Rope(bob4.body,{x:350,y:100});
    rope5 = new Rope(bob5.body,{x:400,y:100});

	Engine.run(engine);
  
}


function draw() {

  
  background(220);
  
  roof1.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  
 }



function mouseDragged(){

    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}


