let myVideo;
let otherVideo;

function setup() {
  createCanvas(640, 480);
  myVideo = createCapture(VIDEO, 
    function(stream) {
      let p5l = new p5LiveMedia(this, "CAPTURE", stream, "jZQ64AMJc_TESTTEST");
    }
  );  
  myVideo.muted = true;     
  myVideo.hide();
}

function draw() {
  background(220);
  stroke(255);
  if (myVideo != null) {
    image(myVideo,0,0);
  }
}
