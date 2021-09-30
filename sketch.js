let badYes = false; //for mouse pressed

let sparkle = []; //sparkle class
let smoke = []; //smoke class

var song;
var noise;

function preload() {
  //clipped part of Rihanna's Diamond song; only to be played if badYes is false
  song = loadSound("diamonds.mp3");

  //factory sounds for badYes
  noise = loadSound("factorysounds.mp3");
}

function setup() {
  createCanvas(480, 960);

  frameRate(2);

  //add shining lights to background
  for (let i = 0; i <= 70; i++) {
    sparkle[i] = new Sparkle(random(0, width), random(0, height));
    console.log(sparkle[i]);
  }

  //make the smoke float
  for (let j = 0; j <= 20; j++) {
    smoke[j] = new Smoke(random(width), random(0, height*0.75), random(1, 2));
    console.log(smoke[j]);
  }
}

function draw() {

  if (!badYes) {
    //dark purple background
    background(60, 15, 80);
    drawFlashingDress();
    drawBuyMe(); //text saying "Buy Me!"
    for (i = 0; i < sparkle.length; i++) {
      sparkle[i].display();
    }

    noise.stop();

    //play Rihanna's Diamonds
    if (song.isPlaying()){
      song.setVolume(1);
      }
    else {
      song.play();
    }
  }

  if (badYes) {
    background(40, 0, 0); //bloody red background
    drawBWDress();
    drawSweatshop();
    drawWords(); //text saying "No Fast Fashion"

    //smoke
    for (j = 0; j < smoke.length; j++) {
      smoke[j].display();
      smoke[j].move();
    }

    song.stop();

    //play factory sounds
    if (noise.isPlaying()){
      noise.setVolume(1);
      }
    else {
      noise.play();
    }
  }

}

//change scene from fashion sale to sweatshop
function mousePressed() {
  badYes = !badYes;
}

function drawFlashingDress() {
  drawFlashingTop();
  drawFlashingSkirt();
}

function drawFlashingTop() {
  noStroke();
  fill(random(200, 230), random(140, 180), random(50)); //gold color for top

  beginShape();
  vertex(width * 0.2, height * 0.1);
  vertex(width * 0.3, height * 0.1);
  vertex(width * 0.35, height * 0.15);
  vertex(width * 0.45, height * 0.2);
  vertex(width * 0.55, height * 0.2);
  vertex(width * 0.65, height * 0.15);
  vertex(width * 0.7, height * 0.1);
  vertex(width * 0.8, height * 0.1);
  vertex(width * 0.73, height * 0.2);
  vertex(width * 0.75, height * 0.46);
  vertex(width * 0.6, height * 0.5);
  vertex(width * 0.4, height * 0.5);
  vertex(width * 0.25, height * 0.46);
  vertex(width * 0.27, height * 0.2);
  endShape(CLOSE);
}

function drawFlashingSkirt() {
  beginShape(QUAD_STRIP);

  //left shape of skirt
  fill(random(220, 255), random(100, 120), random(100, 120)); //changing pink
  vertex(width * 0.25, height * 0.46);
  vertex(width * 0.1, height * 0.8);

  //middle shape of skirt
  fill(random(90, 130), random(140, 180), random(220, 255)); //changing light blue
  vertex(width * 0.4, height * 0.5);
  vertex(width * 0.35, height * 0.85);

  //right shape of skirt
  fill(random(220, 255), random(100, 120), random(100, 120)); //changing pink
  vertex(width * 0.6, height * 0.5);
  vertex(width * 0.65, height * 0.85);

  //complete the left shape of skirt
  fill(random(90, 130), random(140, 180), random(220, 255)); //changing light blue
  vertex(width * 0.75, height * 0.46);
  vertex(width * 0.9, height * 0.8);

  endShape();
}

function drawBuyMe() {
  push();
  textAlign(CENTER);
  textStyle(BOLD);
  noStroke();
  fill(random(200, 255), 0, 0); //flashing red to contrast with dark purple bkg
  textSize(48);
  textFont("Georgia");
  text("Buy me!!!!!!", width * 0.5, height * 0.075);
  pop();
}

function drawSweatshop() {
  push();
  //(another) transparent dark red background to cover BW dress
  rectMode(CENTER);
  fill(80, 0, 0, 60);
  rect(width*0.5, height*0.5, width, height);
  pop();

  push();
  // factory
  noStroke();
  fill(0, 180);

  //chimney
  push();
  beginShape();
  vertex(width*0.25, height*0.67);
  vertex(width*0.291, height*0.55);
  vertex(width*0.375, height*0.55);
  vertex(width*0.41, height*0.67);
  endShape(CLOSE);
  scale(random(1, 1.5));
  pop();

  //building
  rectMode(CENTER);
  rect(width*0.5, height*0.75, 400, 155);
  pop();
}

function drawBWDress() {
  drawBWTop();
  drawBWSkirt();
}

function drawBWTop() {
  noStroke();
  fill(40); // dark gray for top
  beginShape();
  vertex(width * 0.2, height * 0.1);
  vertex(width * 0.3, height * 0.1);
  vertex(width * 0.35, height * 0.15);
  vertex(width * 0.45, height * 0.2);
  vertex(width * 0.55, height * 0.2);
  vertex(width * 0.65, height * 0.15);
  vertex(width * 0.7, height * 0.1);
  vertex(width * 0.8, height * 0.1);
  vertex(width * 0.73, height * 0.2);
  vertex(width * 0.75, height * 0.46);
  vertex(width * 0.6, height * 0.5);
  vertex(width * 0.4, height * 0.5);
  vertex(width * 0.25, height * 0.46);
  vertex(width * 0.27, height * 0.2);
  endShape(CLOSE);
}

function drawBWSkirt() {
  beginShape(QUAD_STRIP);

  //left shape of skirt
  fill(60); //dark gray
  vertex(width * 0.25, height * 0.46);
  vertex(width * 0.1, height * 0.8);

  //middle shape of skirt
  fill(65); //medium gray
  vertex(width * 0.4, height * 0.5);
  vertex(width * 0.35, height * 0.85);

  //right shape of skirt
  fill(60); //dark gray
  vertex(width * 0.6, height * 0.5);
  vertex(width * 0.65, height * 0.85);

  //complete the left shape of skirt
  fill(65); //medium gray
  vertex(width * 0.75, height * 0.46);
  vertex(width * 0.9, height * 0.8);

  endShape();
}

function drawWords() {
  push();
  textAlign(CENTER);
  noStroke();
  fill(180); //bold off-white text
  textFont("Arial");

  textSize(30);
  text("DON'T CHASE Fast Fashion!", width * 0.5, height * 0.075);

  textSize(18);
  text("CARBON EMISSIONS", width * 0.5, height * 0.5);

  textSize(24);
  textStyle(BOLD);
  fill(255, 0, 0); //make bold red to get attention
  text("SWEATSHOPS", width * 0.5, height * 0.75);
  pop();
}
