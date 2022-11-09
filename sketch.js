var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1, car1_img;
var car2, car2_img;
var cars = [];
var track_img;
var allPlayers;
var powerCoins, fuels;
var powerCoinImage, fuelImage;
var gameState;
var carsAtEnd;
var lifeImage;
var obstacle1, obstacle2;
var obstacle1Image, obstacle2Image;
var blastImage;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track_img = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage ("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  blastImage = loadImage("./assets/blast.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
  bgImg = backgroundImage;


}

function draw() {
  background(bgImg);

  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    game.play();
  }
  
  drawSprite();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function showError() {
  console.log("lerdo!! como o sus")
  
}

