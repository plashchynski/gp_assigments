var points;
var font;
function preload() {
  font = loadFont('assets/Calistoga-Regular.ttf');
}

//////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(900, 400);
  background(0);

  points = font.textToPoints('c o d e', 50, 300, 300, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
}

//////////////////////////////////////////////////////////////////////
function draw() {
  fill(0,5);
  rect(0,0,width,height);
  

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];

    var amt = map(mouseX, 0, width, 0, 80);

    var nX = map(noise(frameCount * 0.1 + pt.x + pt.y), 0, 1, -amt, amt);
    var nY = map(noise(frameCount * 0.1 + pt.x + pt.y + 10), 0, 1, -amt, amt);

    var size = map(noise(frameCount * 0.01 + pt.x + pt.y + 20), 0, 1, 1, 20);
    
    var r = map(noise(frameCount * 0.01 + pt.x + pt.y + amt), 0, 1, 0, 255);
    var g = map(noise(frameCount * 0.01 + pt.x + pt.y + amt + 1), 0, 1, 0, 255);
    var b = map(noise(frameCount * 0.01 + pt.x + pt.y + amt + 2), 0, 1, 0, 255);

    console.log(r,g,b);
    fill(r, g, b, 100+amt);
    ellipse(pt.x+nX, pt.y+nY, size, size);
  }
}
