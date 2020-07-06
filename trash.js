class Trash {
    constructor(x,y,r) {
      var options = {
        isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
          }

      //this.x = x
      //this.y = y
      this.body = Bodies.circle(x,y,r, options);
      this.r = r
      World.add(world, this.body);
    }
    display(){

      var angle = this.body.angle;
      push();
      ellipseMode(CENTER);
      rotate(angle)
      fill(255);
      strokeWeight(4)
        stroke("white")
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };
  