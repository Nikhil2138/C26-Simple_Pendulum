
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

let engine;
let world;

var ground;

var top_wall;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  ground =new Ground(200,50,150,10);
  ground


  ball = Bodies.circle(150,200,15,ball_options);
  World.add(world,ball);
  
  con = Constraint.create({
    pointA:{x:150, y:50},
    bodyB: ball,
    length: 150,
    stiffness: 0.1
  })
  World.add(world,con);
  
  ball2 = Bodies.circle(180,200,15,ball_options);
  World.add(world,ball2);
  
  con2 = Constraint.create({
    pointA:{x:180, y:50},
    bodyB: ball2,
    length: 150,
    stiffness: 0.1
  })
  World.add(world,con2);
  
  ball3 = Bodies.circle(210,200,15,ball_options);
  World.add(world,ball3);
  
  con3 = Constraint.create({
    pointA:{x:210, y:50},
    bodyB: ball3,
    length: 150,
    stiffness: 0.1
  })
  World.add(world,con3);

  ball4 = Bodies.circle(240,200,15,ball_options);
  World.add(world,ball4);
  
  con4 = Constraint.create({
    pointA:{x:240, y:50},
    bodyB: ball4,
    length: 150,
    stiffness: 0.1
  })
  World.add(world,con4);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  push();
  strokeWeight(2);
  stroke("Blue")
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
  pop();
  

  ellipse(ball.position.x,ball.position.y,15);

  push();
  strokeWeight(2);
  stroke("Blue")
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y)
  pop();
  

  ellipse(ball2.position.x,ball2.position.y,15);


  push();
  strokeWeight(2);
  stroke("Blue")
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y)
  pop();
  

  ellipse(ball3.position.x,ball3.position.y,15);

  push();
  strokeWeight(2);
  stroke("Blue")
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y)
  pop();
  

  ellipse(ball4.position.x,ball4.position.y,15);
  
  ground.show();
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.02,y:0});
}
  


