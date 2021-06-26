const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron;
var rubber;
var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(500,100);
    rubber = new Rubber(200,150,70);
    stone1 = new Stone(100,100,10);
    stone2 = new Stone(200,200,10);
    stone3 = new Stone(300,300,10);
    stone4 = new Stone(400,400,10);
    stone5 = new Stone(400,400,10);
    stone6 = new Stone(300,300,10);
    stone7 = new Stone(200,200,10);
    stone8 = new Stone(100,100,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    stone8.display();
}