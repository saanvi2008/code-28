
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone1,boyImage,boy,tree1
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8; 
var ground1;
var sling;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree1  = new tree(1000,280,20,20);

    stone1 = new stone(111,150,50);

    mango1 = new mango(800,10,70);
    mango2 = new mango(900,10,70);
    mango3 = new mango(1000,10,70);
    mango4 = new mango(700,30,70);
    mango5 = new mango(700,-40,70);
    mango6 = new mango(800,-50,70);
    mango7 = new mango(900,-50,70);
    mango8 = new mango(850,-100,70);

    ground1 = new ground(600,height,2000,20);

   // sling1 = new slingshot(200,100,10,10);
   sling2 = new slingshot(stone1.body,{x:200,y:100});

    boy = createSprite(200,430,20,20);
	  boy.addImage(boyImage);
    boy.scale = 0.2;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  tree1.display();

  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  ground1.display();

  sling2.display();


  drawSprites();
 
}

function detectCollision(lstone,lmango){
  mangoBodyPos = lmangoBodyPos;
  stoneBodyPos = lstoneBodyPos;

  var distance = dist(stoneBodyPos.x, stoneBodyPos.y,mangoBodyPos.x,stoneBodyPos.y);

  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango,false);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling1.fly();
}

