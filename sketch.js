var boy,boyImg,boyStand;
var road,roadImg,endImg;

function preload(){
  
  boyImg = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png");
  
  boyStand = loadImage("10.png");
  
  roadImg = loadImage("road.png");
  
  endImg = loadImage("end-removebg-preview.png");
  
}

function setup(){
  createCanvas(600,300);
  
  
  road = createSprite(990,150,20,20);
  
  road.addImage("road",roadImg);
  
  road.scale = 2.05;
  
  boy = createSprite(50,200,20,50);
  
  boy.addAnimation("boy",boyImg);
  
  boy.scale = 0.7;
  
  var end = createSprite(-180,150,20,600);
  
  end.addImage("DeadEnd",endImg);
  
  end.scale = 1.2
  

}

function draw(){
  
  background("black");
  
  movement();
  
  walls();
  
  //console.log(boy.x);
  
  
  
  
  
  camera.position.x = boy.x;
  
  drawSprites();
  
}



function movement(){
  
  
  if(keyDown("right")){
    
    boy.velocityX = 5;
    
  } else{
    boy.velocityX = 0;
 }
  
  if(keyDown("left")){
    
    boy.velocityX = -5;
    
  } 
  
  if(keyDown("up")){
    
    boy.velocityY = -5;
    
  } else{
    boy.velocityY = 0;
 }
  
  if(keyDown("down")){
    
    boy.velocityY = 5;
    
  } 
  
  
}


function walls(){
  
  if(boy.x < 10){
    boy.velocityX = 0;
    if(keyDown("right")){
      boy.velocityX = 5;
    }
  }
  
  
  
  if(boy.y < 40){
    boy.velocityY = 0;
    if(keyDown("down")){
      boy.velocityY = 5;
    }
  }
  
  
  
  if(boy.y > 240){
    boy.velocityY = 0;
    if(keyDown("up")){
      boy.velocityY = -5;
    }
  }
  
  if(boy.x > 1975){
    boy.velocityX = 0;
    if(keyDown("left")){
      boy.velocityX = -5;
    }
  }
  
  
  
}

