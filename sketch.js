let video;

function preload(){
  video = createVideo('background.mp4');
  video.loop();
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  
}

function draw() {
  image(video,width,height);
}
