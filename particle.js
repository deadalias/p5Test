class Particle {
  //constructor() {
  constructor(x, y) {
    //this.loc = createVector(width / 2, height / 2);
    this.loc = createVector(x, y);
    //this.vel = createVector(0, 0);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 5));
    this.acc = createVector(0, 0);
    //this.mass = m;
    this.lifetime = 255;
  }

  applyForce(force) {
    this.acc = force;
    //let f = p5.Vector.div(force,this.mass);
    this.acc.add(force);
  }

  update() {
    
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.acc.set(0, 0);
    this.lifetime -= 1;
  }

  display() {
    noStroke();
    fill(255, this.lifetime);
    ellipse(this.loc.x, this.loc.y, 4, 4);

  }

  bounce() {
    if (this.loc.y >= height) {
      this.loc.y = height;
      this.vel.y *= -1;
    }
    if (this.loc.x >= width) {
      this.loc.x = width;
      this.vel.x *= -1;
    }
    if (this.loc.x <= 0) {
      this.loc.w = 0;
      this.vel.x *= -1;
    }
  }

  gone() {
    return (this.lifetime < 0);
  }
}