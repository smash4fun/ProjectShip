
function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(300,175,525,5)
  sea.addImage(seaImage)
  ship = createSprite(100,150,10,30)
  ship.addAnimation("shipping",shipImage)
  ship.scale = 0.1
  sea.velocityX = -5
 


}

function draw() {


if(sea.x < 0) {
  sea.x = sea.width/2
 drawSprites()
}}