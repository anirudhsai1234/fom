var canvas,database;
var allPlayers;
var gameState=0
var database;
var playerCount;
var form;
var game;
var player;
var car1,car2,car3,car4,cars;
var car1image,car2image,car3image,car4image;
var track;
var ground;
function preload(){
  car1image=loadImage("images/car1.png");
  car2image=loadImage("images/car2.png");
  car3image=loadImage("images/car3.png");
  car4image=loadImage("images/car4.png");
  ground=loadImage("images/ground.png");
  track=loadImage("images/track.jpg");
}
function setup(){
  database = firebase.database();
  console.log(database);
 canvas= createCanvas(displayWidth-20,displayHeight-20);
game=new Game()
game.getState()
game.start()
 
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear();
    game.play()
  } 
  if(gameState===2){
    game.end()
  }
}

