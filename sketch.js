let video;

function preload(){
  video = createVideo('background.mp4');
  video.loop();
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  image(video,width,height);
}

function draw() {
  background(220);
  fill(255,0,0);
  ellipse(mouseX,mouseY,50,50);
}
