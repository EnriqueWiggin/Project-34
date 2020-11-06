//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
function preload()
{
  happyDog = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dog2);
  dog.scale=0.15;
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87);
  
  
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  
  textSize(15);
  fill("black");
  stroke("silver");
  text("Press Up Arrow to Feed Dog Milk")

}

function readStock(data) {
  foodS-data.val();
}

function writeStock(x) {

  if(x<-0) {
    x-0;
  } else {
    x=x-1;
  }
  
database.ref('/').update({
  Food:x
  })
}



