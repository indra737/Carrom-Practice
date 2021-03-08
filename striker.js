class Striker{
    constructor(x,y){
      var options={
          isStatic: false,
      restitution:0.5,
          
      }
 
        this.x=x;
        this.y=y;
        this.body= Matter.Bodies.circle(this.x,this.y,15,options)
        World.add(world,this.body)
        this.SImage= loadImage('images/striker.png');
       
    }
    show(){
        var pos= this.body.position;
        var angle= this.body.angle;
       push()
        translate(pos.x,pos.y);
      
       fill(200,150,0)
         imageMode(CENTER)
         image(this.SImage,0,0,130,100)
        pop()
    }
 
 }