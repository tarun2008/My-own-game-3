var PLAY = 1;
var END = 0;
var gameState = PLAY;

var shinchan, shinchan_running, shinchan_collided;
var ground, invisibleGround, groundImage;

var gameState="start";
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

var gameOver, restart;

localStorage["HighestScore"] = 0;

function preload(){
  shinchan_running =   loadAnimation("Running 1.png","Running 2.png","Running 3.png","Running 4.png");
  //shinchan_collided = loadAnimation("shinchan_collided.png");
  
  city_background = loadImage("city.png");
 forest_background = loadImage("Forest.jpg");  
 desert_background = loadImage("desert.jpg");

  city_obstacle1 = loadImage("City obstacle 1.png");
  city_obstacle2 = loadImage("City obstacle 2.png");
  city_obstacle3 = loadImage("City obstacle 3.png");
  city_obstacle4 = loadImage("City obstacle 4.png");
  desert_obstacle1 = loadImage("desert obstacle.png");
  desert_obstacle2 = loadImage("Desert obstacle 2.png");
  forest_obstacle1 = loadImage("Forest obstacle.png");
  forest_obstacle2 = loadImage("Forest obstacle 2.png");
  
  gameOverImg = loadImage("game over.png");
  restartImg = loadImage("Restart.png");
}

function setup() {
  createCanvas(1450, 680);
  
  //shinchan = createSprite(50,180,20,50);
  
  /*shinchan.addAnimation("running", shinchan_running);
  shinchan.addAnimation("collided", shinchan_collided);
  shinchan.scale = 0.5;
  
  shinchan.setCollider("circle",0,0,40);
  shinchan.debug = false*/
  
  
 
  
 // gameOver = createSprite(300,100);
 // gameOver.addImage(gameOverImg);
  
  /*restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  */
 

 // obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  //shinchan.debug = true;
  background("red");
  if(gameState==="start"){
    story=createSprite(displayWidth/2,displayHeight/2,50,50);
    playButton=createSprite(displayWidth-250,displayHeight-250,50,20);
    if(mousePressedOver(playButton)){
      gameState="play";

    }
  }
   else if(gameState==="play"){
     bg=createSprite(725,280);
     bg.addImage(city_background);
     bg.scale=3.5
     bg.velocityX=-2;
   }
  
  drawSprites();
}



function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  shinchan.changeAnimation("running",shinchan_running);
  
  
  score = 0;
  
}