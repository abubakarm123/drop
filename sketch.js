const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var drops = []
var maxDrops = 100
function preload(){
  boy1 =  loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
  thunder1 = loadImage("1.png")
  thunder2 = loadImage("2.png")
  thunder3 = loadImage("3.png")
  thunder4 = loadImage("4.png")
}

function setup(){
   createCanvas(400,700)
   boy = createSprite(200,570,10,10)
   boy.addAnimation("boys",boy1)
    boy.scale = 0.5


    




}

function draw(){
    background("black")


//if(frameCount  % 80 === 0){
//thunder = createSprite(random(10,350)),random(10,50,10,10)




//}







    
    drop()
    drawSprites()
}   

function drop(){
  if(frameCount % 100 === 0){
    for(var i = 0;i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,700)))
      for(var i = 0;i<maxDrops;i++){
        drops[i].display()
        }
    
  }

 }

 
}






























