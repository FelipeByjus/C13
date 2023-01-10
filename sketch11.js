var garden,rabbit;
var gardenImg,rabbitImg;
var apple, orangeLeaf, redLeaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  drawSprites();
  
}



function createApples(){
apple = createSprite (random(50, 350),40, 10, 10);
apple.addImage (appleImg);
apple.scale = 0.07;
apple.velocityY = 3;
apple.lifetime = 150;
}

function createOrangeLeaf(){
  orangeLeaf = createSprite (random(50, 350),40, 10, 10);
  orangeLeaf.addImage (orangeImg);
  orangeLeaf.scale = 0.08; 
  orangeLeaf.velocityY = 3; 
  orangeLeaf.lifetime = 150;
}

function createRedLeaf(){
  RedLeaf = createSprite (random(50, 350),40, 10, 10);
  RedLeaf.addImage (redImg);
  RedLeaf.scale = 0.06; 
  RedLeafvelocityY = 3;
  RedLeaf.lifetime = 150;
}

var select_sprites = Math.round(random(1.3));

if (frameCount % 80 == 0) {
  if (select_sprites == 1) {
    createApples();
  }else if(select_sprites == 2){
    createOrangeLeaf();
  }else {
    createRedLeaf();
  }
}