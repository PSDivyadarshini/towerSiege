
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;

var box;
var stone;
var r

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
    world = engine.world;

    box=new Box(800,200,50,60);
    stone=new hexagon(200,300,10,10);

    r = new rubber(stone.body,{x:200,y:100});

    Engine.run(engine);
}

function draw() {
    background("black");
    box.display();
    stone.display();
    r.display();
    drawSprites();
}