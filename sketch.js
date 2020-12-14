const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1, sling;
var BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7, BlockBlue8;
var BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;
var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;
var polygon1;

function preload(){
  hexagonImg = loadImage("polygon.png");
}
function setup() {

  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world
  ground1 = new Ground(600, 380, 1200, 20);
  stand1 = new Ground(290, 300, 290, 15);

  //first level
  //BlockBlue1 = new BoxBlue(200, 180, 30, 40);
  BlockBlue2 = new BoxBlue(230, 180, 30, 40);
  BlockBlue3 = new BoxBlue(260, 180, 30, 40);
  BlockBlue4 = new BoxBlue(290, 180, 30, 40);
  BlockBlue5 = new BoxBlue(320, 180, 30, 40);
  BlockBlue6 = new BoxBlue(350, 180, 30, 40);
  //BlockBlue7 = new BoxBlue(380, 180, 30, 40);

  //second level
  //BlockPink1 = new BoxPink(200, 50, 30, 40);
  //BlockPink2 = new BoxPink(230, 50, 30, 40);
  BlockPink3 = new BoxPink(260, 120, 30, 40);
  BlockPink4 = new BoxPink(290, 120, 30, 40);
  BlockPink5 = new BoxPink(320, 120, 30, 40);
  //BlockPink6 = new BoxPink(340, 50, 30, 40);
  //BlockPink7 = new BoxPink(370, 50, 30, 40);

  //third level
  //BlockBlue8  = new BoxBlue(202, 190, 30, 40);
  //BlockBlue9  = new BoxBlue(220, 190, 30, 40);
  //BlockBlue10 = new BoxBlue(240, 190, 30, 40);
  BlockBlue11 = new BoxBlue(290, 80, 30, 40);
  //BlockBlue12 = new BoxBlue(280, 190, 30, 40);
  //BlockBlue13 = new BoxBlue(300, 190, 30, 40);
  //BlockBlue14 = new BoxBlue(320, 190, 30, 40);

  polygon1  = new poly(110, 100, 20, 20);

  sling = new SlingShot(polygon1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();
  stand1.display();

  //BlockBlue1.display();
  BlockBlue2.display();
  BlockBlue3.display();
  BlockBlue4.display();
  BlockBlue5.display();
  BlockBlue6.display();
  //BlockBlue7.display();

  //BlockPink1.display ();
  //BlockPink2.display ();
  BlockPink3.display ();
  BlockPink4.display ();
  BlockPink5.display ();
  //BlockPink6.display ();
  //BlockPink7.display ();

  //BlockBlue8.display ();
  //BlockBlue9.display ();
  //BlockBlue10.display();
  BlockBlue11.display();
  //BlockBlue12.display();
  //BlockBlue13.display();
  //BlockBlue14.display();

  polygon1.display();
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon1.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
  sling.fly();
}


