let color_ramp = [];
let  minute_xs  = [];
let minute_ys = [];

function setup() {
  createCanvas(800, 600);
  let from = color(247, 204, 158, 150);
  let to = color(176, 14, 141, 150);
  for (let i = 0; i < 60; i++) {
    append(color_ramp, lerpColor(from, to, i/60));
  }
  for (let i = 0; i < 60; i++) {
    append(minute_xs, random(800));
    append(minute_ys, random(600));
  }

}

function draw() {
  background(220);
  frameRate(1);

  noStroke();
  fill(240, 240, 161, 150);
  arc(400, 300, 400, 400, 0, hour()*2/24*PI);


  for (let i = 0; i < second(); i++) {
    stroke(152, 180, 217, 150);
    line(random(50, 750), random(50, 550), random(50, 750), random(50, 550));
  }

  for (let i = 0; i < minute(); i++) {
    fill(color_ramp[i]);
    noStroke();
    ellipse(minute_xs[i], minute_ys[i], 50)
  }


}
