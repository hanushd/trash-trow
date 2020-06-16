class bin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(700,555,20,70, options);      
      this.width = 20;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      rectMode(CENTER);
      fill(red);
      strokeWeight(4)
        stroke("red")
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  