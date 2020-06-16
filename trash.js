class Trash {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(700,650,40, options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle

      push()
      translate(pos.x,pos.y)
      rotate(angle)
  
      ellipseMode(CENTER);
      fill(255);
      strokeWeight(4)
        stroke("black")
      circle(0,0,this.radius);
      pop();
    }
  };
  