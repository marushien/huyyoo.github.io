let myVideo;
let otherVideo;

function setup() {
  createCanvas(1000, 1000);
  
    myVideo = createCapture(VIDEO, 
      function(stream) {
        let p5l = new p5LiveMedia(this, "CAPTURE", stream, "jZQ64AMJc_TESTTEST");
        p5l.on('stream', gotStream);
      }
    );  
    myVideo.muted = true;     
    myVideo.hide();
}

function draw() {
  background(240);
  stroke(255);
  if (myVideo != null) {
    image(myVideo,0,0,320,240);
    text("My Video", 10, 10);
  }
  if (otherVideo != null) {
    image(otherVideo,320,0,320,240);
    text("Their Video", 640+10, 10);
  }  
}

// We got a new stream!
function gotStream(stream, id) {
  // This is just like a video/stream from createCapture(VIDEO)
  otherVideo = stream;
  //otherVideo.id and id are the same and unique identifiers
  otherVideo.hide();
}
