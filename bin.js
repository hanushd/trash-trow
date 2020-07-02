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
      var pos =this.body.position;
       
      push();
      rectMode(CENTER);
      fill("red");
      strokeWeight(4)
        stroke("red")
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  