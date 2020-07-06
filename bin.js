class bin {
    constructor(x,y) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,20,70, options);      
      this.width = 20;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){

      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.body, 0, 0, this.width, this.height);
        pop();

    }
  };
  