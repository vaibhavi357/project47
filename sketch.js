var basket, baketImg;
var egg, eggImg, brokenEggImg;
var backgroundImg;
var ground, groungImg;
var rand;
var score = 0;

function preload(){
baketImg = loadImage("basket.png");
eggImg = loadImage("egg.jpg");
backgroundImg = loadImage("background2.jpg");
groundImg = loadImage("ground.png");
brokenEggImg = loadImage("brokenEgg.png");
}

function setup() {
	createCanvas(800, 600);

	basket = createSprite(400, 470);
	basket.addImage(baketImg);
	basket.scale = 0.2;

	rand = Math.round(random(50, 750));
	egg = createSprite(rand, 10);
	egg.addImage(eggImg);
	egg.velocityY = 8;
	egg.scale = 0.03;

  ground = createSprite(400, 560, 800, 80);
}


function draw() {
  background(backgroundImg);
  rectMode(CENTER);
  textSize(30)
  text("score:" + score, 700, 100);

  if (keyIsDown(RIGHT_ARROW)) {
  	basket.velocityX = 5;
  }

  if (keyIsDown(LEFT_ARROW)) {
  	basket.velocityX = -5;
  }

  if(egg.isTouching(ground)){
  	egg.addImage(brokenEggImg);
  	egg.scale = 0.01
  	egg.velocityY = 0;
  }

  if(basket.isTouching(egg)) {
    score = score + 1;
  }


  drawSprites();
}



