// Namespacing 

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1,box2;
var ground;   
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
     
    box2= new Box(300,100,100,50);
    ground = new Ground();
    box1 = new Box(250,250,40,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box2.display();
    box1.display();
}
