const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1; 
var backgroundImg;
var platform;
var slingShot;
// var log6;
var gameState = "onsling";
var score = 0;



function preload() {
    // backgroundImg = loadImage("sprites/bg.png");
    getBackGroundImage();
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    platform = new Ground(100,305,400,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(300,100);

    // log6 = new Log(60,100,100, PI/2);


    slingShot = new SlingShot(bird.body,{x:290,y:90});

    

    
    

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);


    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();


    // log6.display();
    slingShot.display();
    
    bird.display();

    pig1.score();
    pig3.score();
    
    push();
    // strokeWeight(15);
    stroke("green");
    fill("yellow");
    textSize(30);
    text("score:"+score,100,100);
    pop();
}

function mouseDragged()
{
    
    if(gameState === "onsling")
    {
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
}

function mouseReleased()
{
   slingShot.fly()
   gameState = "launched"
   
}

function keyPressed()
{
    if(keyCode === 32)
    {
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:290,y:90})
        slingShot.attach(bird.body);
        gameState = "onsling";
    }
}

async function getBackGroundImage()
{
    var response = await fetch("http://worldclockapi.com/api/json/est/now")

    var responsedata = await response.json();
    console.log(responsedata);

    var currdt = responsedata.currentDateTime;
    console.log(currdt);

    var hour = currdt.slice(11,13);
    // hour = 21;
    
    if(hour>6 && hour<18)
    {
        backgroundImg = loadImage("sprites/bg.png");
    }
    else
    {
        backgroundImg = loadImage("sprites/bg2.jpg");
    }

}
