let badYes = false; //for mouse pressed

let sparkle = []; //sparkle class

// var song;

function preload() {
  //clipped part of Rihanna's Diamond song; only to be played if badYes is false
  song = loadSound("diamonds.mp3");
}

function setup() {
  createCanvas(480, 960);

  frameRate(2);
  for (let i = 0; i <= 70; i++) {
    sparkle[i] = new Sparkle(random(0, width), random(0, height));
    console.log(sparkle[i]);
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
    song.play();
  }

  if (badYes) {
    background(40, 0, 0); //bloody red background
    drawBWDress();
    drawSweatshop();
    drawNoFashion(); //text saying "No Fast Fashion"
    song.stop();
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
  //(another) transparent dark red background to cover BW dress
  noStroke();
  fill(160, 0, 0, 60);
  rect(0, 0, width, height);

  //factory
  //beginShape();
  // vertex();
  // endShape();
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

function drawNoFashion() {
  push();
  textAlign(CENTER);
  noStroke();
  fill(200); //bold off-white text
  textSize(30);
  textFont("Arial");
  text("DON'T CHASE Fast Fashion!", width * 0.5, height * 0.075);
  pop();
}
