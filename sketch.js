var database;
var player;
var form;
var game;
var PlayerCount = 0;
var gameState = 0;
var chefImage, arrowImage, grandmaImage, backgroundImg, speechImage;
var grandmaTime = 0;
var coffeemachineImage;
var custumer1Image, custumer2Image, custumer3Image;
var dish1Image, dish2Image, dish3Image;
var steamerImage, cookieDoughImage, coinImage, cornImage;
var kitchenImage, coffeemachine, coffee, chef;
var customer1, chef, dish, bar;
var randCustomer, rand2;
var custSpeechBubble, happinessbar, happiness = 0;
var coffee, cookiedough, corn, steamer;

function preload(){

  chefImage = loadImage("images/chef.png");
  custSpeechBubble = loadImage("images/speech2.png")
  arrowImage = loadImage("images/arrow.png");
  backgroundImg = loadImage("images/background.png");
  coffeemachineImage = loadImage("images/coffeemachine.png");
  custumer1Image = loadImage("images/custumer1.png"); 
  custumer2Image = loadImage("images/custumer2.png");
  custumer3Image = loadImage("images/custumer3.png");
  dish1Image = loadImage("images/dish1.png");
  dish2Image = loadImage("images/dish2.png");
  dish3Image = loadImage("images/dish3.png");
  grandmaImage = loadImage("images/grandma.png");
  speechImage = loadImage("images/speech.png");
  steamerImage = loadImage("images/steamer.png");
  cookieDoughImage = loadImage("images/cookiedough.png");
  coinImage = loadImage("images/money.png");
  kitchenImage = loadImage("images/Background2.jpg");
  cornImage = loadImage("images/corn.png");
}

function setup() {
  createCanvas(800,700);
  
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(255,255,255);  

  if(PlayerCount === 1) {
      gameState = 1;
  }
   
  if (gameState === 1) {
    game.play();
  }

  text(mouseX + "," + mouseY , mouseX, mouseY);

  console.log(happiness);
}