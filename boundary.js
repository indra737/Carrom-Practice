class Boundary{
    constructor(x,y,w,h){
      var options={
          isStatic: true,
          restitution:0.3,
         density:100000000000000000000000000000000000000000000
      }
 
        this.x=x;
        this.y=y;
        this.w=w
        this.h=h;
        this.body= Matter.Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)
        this.WImage= loadImage('images/White.png');
       
    }
    show(){
        var pos= this.body.position;
        var angle= this.body.angle;
       push()
        translate(pos.x,pos.y);
        fill(70)
         rectMode(CENTER)
         rect(0,0,this.w,this.h)
        pop()
    }
 
 }