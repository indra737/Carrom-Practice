class black{
    constructor(x,y){
      var options={
          isStatic: false,
          restitution:0.2,
         
      }
 
        this.x=x;
        this.y=y;
        this.body= Matter.Bodies.circle(this.x,this.y,10,options)
        World.add(world,this.body)
       
      this.visi=255;
       s=0;
    }
    vanish(){
       
        World.remove(world,this.body)
      
      }
      update(){
         
          s++;
      }
    show(){
        var pos= this.body.position;
        var angle= this.body.angle;
       push()
        translate(pos.x,pos.y);
        fill(30)
         imageMode(CENTER)
         circle(0,0,20,20)
        pop()
    }
 
 }