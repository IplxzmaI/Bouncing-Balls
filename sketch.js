const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball
var ball2

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

var bo = {
restitution:1.0

}


ball = Bodies.circle(200,100,20,bo);
World.add(world,ball);

var bo2 = {
 restitution: 1.5
}

ball2 = Bodies.circle(250,100,20,bo2)
World.add(world,ball2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

fill ("pink");

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);

fill  ("purple");

ellipseMode(RADIUS);
ellipse(ball2.position.x,ball2.position.y,25,25);


}