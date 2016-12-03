// Emilie Pitre ©2016

var street;
var traffic;
var present;
var dia = 0.5;
var opacS;
var opacT = 50;
var opacGlow;
var opacR;
var opacG;
var opacY;
var time;
var opacSpeed = 5
var transparency = 1;

function preload() {
  street = loadTable("streetlights.csv", "header");
  traffic = loadTable("trafficlights.csv", "header")
}

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  textFont("Amatic SC");
  textAlign(CENTER);
  // frameRate(24);
}

function draw() {
  background(20, 30, 30);

  for (var i = 0; i < street.getRowCount(); i++) {
    var lngxS = street.getNum(i, "LONGITUDE");
    var latyS = street.getNum(i, "LATITUDE");
    var present = street.getString(i, "LIGHT PRESENT");
    if (present = "Yes") {
      streetLight(lngxS, latyS);
    }
  }

  for (var i = 0; i < traffic.getRowCount(); i++) {
    var lngxT = traffic.getNum(i, "LONGITUDE");
    var latyT = traffic.getNum(i, "LATITUDE");
      trafficLight(lngxT, latyT);
  }

  push();
    textSize(36);
    fill(200, 200, 180, 200);
    text("Baton Rouge", 600, 100);
    strokeWeight(10);
    strokeJoin(ROUND);

    opacT += opacSpeed * transparency

    if (opacT < 50 || opacT > 200) {
      transparency = -transparency
    }

    opacGlow = random(2, 5);
    stroke(200, 200, 180, opacT/10);
    fill(200, 200, 180, opacT);
    if(opacT < 125) {
      var subtitle = "A Nightscape";
    } else {
      var subtitle = "A Lightscape";
    }
    text(subtitle, 600, 135);
  pop();

  saveFrames("lsframe", "png", 2, 60);

}

function streetLight(lngxS, latyS) {
  var x = map(lngxS, -91.29, -90.89, 0, width);
  var y = map(latyS, 30.71, 30.31, 0, height);
  opac = random (200, 250);
  fill(200, 200, 180, opac);
  ellipse(x, y, dia);
  opacGlow = random(1, 3);
  fill(200, 200, 180, opacGlow/2);
  diaMod = random(30, 40);
  ellipse(x, y, dia * diaMod);
}

function trafficLight(lngxT, latyT) {
  var x = map(lngxT, -91.29, -90.89, 0, width);
  var y = map(latyT, 30.71, 30.31, 0, height);

  //red light
  var opacR = random (100, 255);
  fill(255, 100, 100, opacR/10);
  ellipse(x, y - 3, dia*14);
  fill(200, 100, 100, opacR);
  ellipse(x, y - 3, dia*3);

  //yellow light
  var opacY = random (100, 255);
  fill(255, 255, 100, opacY/10);
  ellipse(x, y, dia*14);
  fill(200, 200, 100, opacY);
  ellipse(x, y, dia*3);

  //green light
  var opacG = random (100, 255);
  fill(100, 255, 100, opacG/10);
  ellipse(x, y + 3, dia*14);
  fill(100, 200, 100, opacG);
  ellipse(x, y + 3, dia*3);

}
