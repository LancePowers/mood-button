'use strict';
var angles = [ 72, 72, 72, 72, 72 ];
var x = 150,
y = 150,
angle1 = 0.0,
segLength = 50,
colors = ['#0B6739','#8E2C89','#AE2732','#396AB0','#F68B34'];
var title = 'title'
function setup() {
createCanvas(300, 350);
  noStroke();
  frameRate(5);
  noLoop();// Run once and stop
}

function draw() {
  background(255);
  pieChart(300, angles);
  textSize(50);
  text(title, 20, 320)
  // getMood();
  // console.log(mouseX)
}

function mouseClicked(e) {
  console.log(e);
  title = calculate();
  draw()
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var gray = colors[i]//map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(150, 150, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}

function calculate(){
  var dx,dy;
  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);
  var angleD = degrees(angle1);
  angleD += 180;
  // console.log(parseFloat(x,2),parseFloat(y,2),angle1)
  return parseInt(angleD/72)
}




// if(angleD < 72){
//   fill(colors[2])
// } else if(angleD < 2*72){
//   fill(colors[3])
// } else if(angleD < 3*72){
//   fill(colors[4])
// } else if(angleD < 4*72){
//   fill(colors[0])
// } else if(angleD < 360){
//   fill(colors[1])
// }

console.log('\'Allo \'Allo! Po');
