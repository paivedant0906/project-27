class Bob {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          restitution:1.0,
          friction:0,
          density:0.9, 
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,this.r/2,options)
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }