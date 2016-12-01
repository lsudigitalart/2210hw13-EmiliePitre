// Emilie Pitre ©2016

var street;
var traffic;
// var present;
  // wanted to only display known active streetlights, omitted due to load times
var dia = 0.5;
var opac
var time

function preload() {
  street = loadTable("streetlights.csv", "header");
  traffic = loadTable("trafficlights.csv", "header")
}

function setup() {
  createCanvas(800, 800);
  noStroke();
  textFont("Amatic SC");
  textAlign(CENTER);
}

function draw() {
  background(20, 30, 30);

  for (var i = 0; i < street.getRowCount(); i++) {
    var lngxS = street.getNum(i, "LONGITUDE");
    var latyS = street.getNum(i, "LATITUDE");
    streetLight(lngxS, latyS);
  }

  for (var i = 0; i < traffic.getRowCount(); i++) {
    var lngxT = traffic.getNum(i, "LONGITUDE");
    var latyT = traffic.getNum(i, "LATITUDE");
      trafficLight(lngxT, latyT);
  }

  textSize(42);
  fill(200, 200, 180, 200);
  text("Baton Rouge:", 600, 100);
  time = millis();
  if (time < 10000) {
    var subtitle = "A Nightscape"
    fill(200, 200, 180, 150);
    text(subtitle, 600, 150);
  } else {
    push();
    strokeWeight(10);
    strokeJoin(ROUND)
    opac = random(10, 20);
    stroke(200, 200, 180, opac)

    var subtitle = "A Lightscape"
    opac = random(100, 200);
    fill(200, 200, 180, opac);
    text(subtitle, 600, 150);
    pop();
  }

}

function streetLight(lngxS, latyS) {
  var x = map(lngxS, -91.29, -90.89, 0, width);
  var y = map(latyS, 30.71, 30.31, 0, height);
  fill(200, 200, 180, 200);
  ellipse(x, y, dia);
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
