let otherVideo;


function setup() {
  myCanvas = createCanvas(1000, 1000);
  let p5l = new p5LiveMedia(this,"CANVAS",myCanvas,"party");
  p5l.on('stream', gotStream);   
}

function draw() {
  background(220);
  if(otherVideo != null){
    image(otherVideo,0,0,width,height);
  }
}

// We got a new stream!
function gotStream(stream) {
  // This is just like a video/stream from createCapture(VIDEO)
  otherVideo = stream;
  //otherVideo.id is the unique identifier for this peer
  otherVideo.hide();
}
