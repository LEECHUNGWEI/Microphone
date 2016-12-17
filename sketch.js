var mac;

function setup() {
  createCanvas(windowWidth,windowHeight)
  
  //Create an audio input
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  background(246,241,237);
    
  for(var a=0; a<1000; a+=15){

      var c = color('#0f0');
      var vol = mic.getLevel();
      var r = map(vol,0,1,0,500);
      noFill();
      stroke(c);
      strokeWeight(1);
      ellipse(windowWidth/2,windowHeight/2,a+r,a+r)
  }
   
    for(var b=100; b<windowWidth; b+=100){
    
       stroke(80);
       strokeWeight(1);
       line(b,windowHeight/2,b,windowHeight/2 + r/2);
       stroke(80);
       line(b,windowHeight/2,b,windowHeight/2 - r/2)
   }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}