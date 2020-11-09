//Create variables here
var dog,happyDog,dog2;
var database
var foodS
var foodStock
function preload()
{
  happyDog = loadImage("dogImg1.png");
  dog2 = loadImage("dogImg.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dog2);
  dog.scale=0.15;
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
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}

function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {

  if(x<=0) {
    x=0;
  } else {
    x=x-1;
  }
  
database.ref('/').update({
  Food:x
  })
}



