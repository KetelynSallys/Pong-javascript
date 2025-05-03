let xBall = 300;
let yBall = 200;
let diameter = 15;
let ray = diameter / 2;

let speedXBall = 6;
let speedYBall = 6;
let racketLength = 10;
let racketHeight = 90;

let xRacket = 5;
let yRacket = 150;

let xRacketOpponent = 585;
let yRacketOpponent = 150;
let speedYOpponent;

let collision = false;

let myPoints = 0;
let pointsOpponent = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showBall();
  moveBall();
  checkEdgeCollision();
  showsRacket(xRacket, yRacket);
  moveMyRacket();
  checkCollisionRacket(xRacket, yRacket);
  showsRacket(xRacketOpponent, yRacketOpponent);
  moveOpponentRacket();
  checkCollisionRacket(xRacketOpponent, yRacketOpponent);
  includeScoreboard();
  scorePoints();
}

function showBall() {
  circle(xBall, yBall, diameter);
}

function moveBall() {
  xBall += speedXBall;
  yBall += speedYBall;
}

function checkEdgeCollision() {
  if (xBall + ray > width || xBall - ray < 0) {
    speedXBall *= -1;
  }
  if (yBall + ray > height || yBall - ray < 0) {
    speedYBall *= -1;
  }
}

function showsRacket(x, y) {
  rect(x, y, racketLength, racketHeight);
}

function moveMyRacket() {
  if (keyIsDown(UP_ARROW)) {
    yRacket -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRacket += 10;
  }
}

function checkCollisionRacket(x, y) {
  collision = collisionBallCircleRacket(x, y, racketLength, racketHeight, xBall, yBall, ray);
  if (collision) {
    speedXBall *= -1;
  }
}

function moveOpponentRacket() {
  speedYOpponent = yBall - yRacketOpponent - racketLength / 2 - 30;
  yRacketOpponent += speedYOpponent;
}

function includeScoreboard() {
  fill(255);
  text(myPoints, 278, 26);
  text(pointsOpponent, 321, 26);
}

function scorePoints() {
  if (xBall > 590) {
    myPoints += 1;
  }
  if (xBall < 10) {
    pointsOpponent += 1;
  }
}
