var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof,chain,rope;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint; 


function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,200);
	bobObject2= new Bob(300,200);
	bobObject3= new Bob(400,200);
	bobObject4= new Bob(500,200);
	bobObject5= new Bob(600,200);
	roof= new Roof(600,200);
	chain = new Chain(bird.body,log6.body);



   	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();

    
    roof.display();
    chain.display();
 
}



