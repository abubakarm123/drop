class Drop {
    constructor(x,y,radius) {
      
      var options = {
          isStatic: false,
          restitution:1,
          density:0.09,
          friction:0.4
      }
      
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      
      this.radius = radius
      
      World.add(world, this.body);


    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      ellipseMode(CENTER);
      fill("white")

      ellipse(0, 0, this.radius,this.radius);
      pop()
    }
  };