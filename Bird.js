class Bird {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      rectMode(CENTER);
      fill("red")
      stroke("blue")
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  