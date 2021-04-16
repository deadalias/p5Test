//var particle;
var particles=[];

function setup() {
  createCanvas(640, 360);
  //particle = new Particle(100, 180, 1);
 /* for(let i=0; i < 100; i++){
    particles.push(new Particle(width/2,height/2));
  }*/
}

function draw() {
  background(50);
  for(let i=0; i < 15; i++){
    particles.push(new Particle(width/2,height/2));
  }
  for (let particle of particles) {
    let gravity = createVector(0, 0.2);
    //let weight = p5.Vector.mult(gravity, particle.mass);
    //particle.applyForce(weight);
    particle.applyForce(gravity);

    particle.update();
    particle.bounce();
    particle.display();
  }
  for(let i = particles.length -1; i >= 0; i--){
    if(particles[i].gone()){
      particles.splice(i,1);
    }
  }

}