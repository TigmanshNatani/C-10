var ship, ship_flotting,edges;
var seaImage;

function preload(){
  ship_flotting = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(535,400);
  
  //creating the ship.
  var ship = createSprite(200,200,100,100);
  ship.addImage("floating",ship_flotting);
  edges = createEdgeSprites();

  //adding scale and position of the ship.
  ship.Scale = 0.5;
  ship.y = 50;
  sea = createSprite(400,200,400,200);
  sea.addImage("sea",seaImage);
}

function draw() {
  background("blue");
  if(sea.x<0);
  sea.velocityX = -2;
  sea.velocityX = 2;
  {
    sea.x = sea.width/2;
  }
  //logging the y position of the ship.
  console.log(ship.y);

  ship.velocityY + 0.5;

  //stop ship from falling down from sea.
  ship.collide(sea);
  drawSprites();
}
