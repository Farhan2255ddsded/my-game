var bck,bk 
var boy,runn
var gih
var coin
var obstacle1,obs1
var score


function preload(){
    bck = loadImage("bckImg.jpg");
    runn= loadAnimation("4c9ogdBgi.gif")
    ground = loadImage("ground.jpg");
    coin= loadAnimation("coin.gif");
    obstacle1 = loadAnimation("obstacle1.png")
}

function setup() {
  createCanvas(1200,600);
 
  bk = createSprite(350,200,660,400)
  bk.addAnimation("bck",bck)
  bk.scale = 0.2
  //bk.x = ground.width / 2;
  bk.velocityX = -8;
  


  boy = createSprite(200, 500);
  boy.addAnimation("running", runn);
  boy.scale = 0.3;

  gih = createSprite(400,500);
  gih.addAnimation("coin",coin)
  gih.scale = 0.40
  gih.velocityX = -2
  
  obs1 = createSprite(600,535)
  obs1.addAnimation("obstacle1",obstacle1)
  obs1.scale = 0.05
  obs1.velocityX = -1


  
}

function draw() {
     background(200);
     drawSprites();

     if(keyDown("space")){
       boy.velocityY = -9
     }

   
  
}