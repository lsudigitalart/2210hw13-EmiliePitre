// Emilie Pitre ©2016

var frameNum = 60;
var imgs = [];
var currentFrame = 1;

function preload() {

  for (var i = 1; i < frameNum; i++) {
    var imgName = "img/lsframe(" + i + ").png";
    imgs[i] = loadImage(imgName);
  };

}

function setup() {
 createCanvas(1000, 1000);
 frameRate(6);
}

function draw() {
  image(imgs[currentFrame], 0, 0);
  currentFrame++;
  
  if (currentFrame == imgs.length) {
    currentFrame = 1;
  }

}
