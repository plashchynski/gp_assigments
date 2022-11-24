// Example is based on examples from:
// http://brm.io/matter-js/
// https://github.com/shiffman/p5-matter
// https://github.com/b-g/p5-matter-examples

// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;

var engine;
var ground;

var ball1;
var ball2;

var catapult;
var catapultSpacer;
var constraint;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create(); // create an engine
  setupCatapult();
  setupBalls();
  setupGround();
}
/////////////////////////////////////////////////////////////
function draw() {
  background(0);
  Engine.update(engine);
  drawBalls();
  drawCatapult();
  drawGround();
}
/////////////////////////////////////////////////////////////
function setupCatapult(){
  catapult = Bodies.rectangle(width/2, height-100, width*0.8, 20);
  //stiffness of 1 and length of 0
  catapultConstraint = Constraint.create({
    pointA: {x: width/2, y: height-100},
    bodyB: catapult,
    stiffness: 1,
    length: 0
  });
  catapultSpacer = Bodies.rectangle(130, height-50, 20, 80, {isStatic: true});
  World.add(engine.world, [catapult, catapultConstraint, catapultSpacer]);
}
/////////////////////////////////////////////////////////////
function drawCatapult(){
  noStroke();
  fill(255);
  drawVertices(catapult.vertices);
  fill('red');
  drawVertices(catapultSpacer.vertices);
}
/////////////////////////////////////////////////////////////
function setupBalls(){
  ball1 = Bodies.circle(100, 100, 20);
  ball2 = Bodies.circle(600, 100, 60, {density: 0.01});
  World.add(engine.world, [ball1, ball2]);
}
/////////////////////////////////////////////////////////////
function drawBalls(){
  fill('blue');
  drawVertices(ball1.vertices);
  drawVertices(ball2.vertices);
}
/////////////////////////////////////////////////////////////
function setupGround(){
  ground = Bodies.rectangle(400, height-10, 810, 25, {isStatic: true});
  World.add(engine.world, [ground]);
}
/////////////////////////////////////////////////////////////
function drawGround(){
  noStroke();
  fill(128);
  drawVertices(ground.vertices);
}
////////////////////////////////////////////////////////////////
// ******* HELPER FUNCTIONS *********
// DO NOT WRITE BELOW HERE
/////////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
