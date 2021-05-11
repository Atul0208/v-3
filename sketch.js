//Create variables here
 var dog, happyDog,  foodS, foodStock;
 var database;
var food = 20;
var bedroom, garden,washroom;
var backgroundImg;
var bg = "images/Garden.png";
var hour;
function preload()
{
  getBackgroundImg();
	 dogImg = loadImage("images/dog.png")
  dImg = loadImage("images/dog1.png")
  bedroomImg = loadImage("images/Bed Room.png")
  //gardenImg = loadImage("images/Garden.png")
  washroomImg = loadImage("images/Wash Room.png")
  sadImg=loadImage("images/Lazy.png")
  
}

function setup() {
  createCanvas(500, 500);
  //database = firebase.database();

  dog = createSprite(250,300,50,50)
  dog.addImage(dogImg)
  dog.scale=0.25
 
}


function draw() {  
  if(backgroundImg)
  background(backgroundImg);
  drawSprites();
  //add styles here
if(keyDown(UP_ARROW)){
//writeStock(foodS);
dog.addImage(dImg)
food=food-1;
} else {
  dog.addImage(dogImg)
}
textSize(15)
        fill("white")
        text("Press up arrow key to feed the dog", 150, 50)
        textSize(35)
        fill("white")
        text("Food "+ food, 150, 150)
  
if(food<=1){
  food=0
  dog.addImage(sadImg)
  text("Master I am hungry ...", 50, 120)
if(keyWentDown(DOWN_ARROW)){
food=food+20
dog.addImage(dogImg)
}
}
textSize(15)
        fill("white")

        text("Press down arrow key to full the food bar", 150, 450)
if( bg === "images/Garden.png"){
dog.destroy();
}
      
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1000){
      
      bg = "images/Garden.png";
     
  }
  else if (hour>=1300 && hour<=1600){
    
      bg = "images/Living Room.png";
  }
  if(hour>=1000 && hour<=1300){
      
    bg = "images/Wash Room.png";
   
}

  backgroundImg = loadImage(bg);
  

}





