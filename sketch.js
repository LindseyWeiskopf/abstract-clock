let  second_xs  = [];
let second_ys = [];

function setup() {
  createCanvas(800, 600);
    for (let i = 0; i < 60; i++) {
    append(second_xs, random(800));
    append(second_ys, random(600));
  }
}

function draw() {
  colorMode(HSB);
  background(6, 0, 95);
  frameRate(1);
  if(second() === 1) {
		console.log(minute());
  }

  fill(6, 0, 95);
  strokeWeight(10);

  for (let i = 0; i < hour(); i++) {
    let colorMap = map(i, 0, 24, 0, 330, true);
    let arc_map_width = map(i, 0, 24, 800, 20, true);
    let arc_map_height = map(i, 0,24, 1200, 20, true);
    stroke(colorMap, 56, 65);
    arc(400, 600, arc_map_width, arc_map_height, PI, 2*PI);
  }

  let minute_map = map(minute(), 0, 60, PI, 2*PI);
  let new_arc_map_width = map(hour(), 0, 24, 800, 20, true);
  let new_arc_map_height = map(hour(), 0, 24, 1200, 20, true);
  let colorMap = map(hour(), 0, 24, 0, 330, true);
  stroke(colorMap, 56, 65);
  arc(400, 600, new_arc_map_width, new_arc_map_height, PI, minute_map);


  for (let i = 0; i < second(); i++) {
    colorMode(RGB);
    noStroke();
    fill(255,255,255,150);
    ellipse(second_xs[i], second_ys[i], 30);
  }

}
