let serverVideo;

function setup() {
  createCanvas(640, 480);
  let p5l = new p5LiveMedia(this, "CAPTURE", serverVideo, "jZQ64AMJc_TESTTEST");
  p5l.on('stream', gotStream);
}

function draw() {
  background(220);
  if (serverVideo != null) {
    image(serverVideo,0,0);
  }  
}

function gotStream(stream, id) {
  serverVideo = stream;
  serverVideo.hide();
}
