class Red{
    constructor(x,y){
      var options={
          isStatic: false,
          restitution:0.2,
        
      }
 
        this.x=x;
        this.y=y;
        this.body= Matter.Bodies.circle(this.x,this.y,10,options)
        World.add(world,this.body)
        
       this.visibility=255
       s=0;
    }
    update(){
      
        s+=5;
    }
    vanish(){
        
        World.remove(world,this.body);
         
      }
    show(){
        var pos= this.body.position;
        var angle= this.body.angle;
       push()
        translate(pos.x,pos.y);
        fill(255,0,100)
         imageMode(CENTER)
         circle(0,0,20,20)
        pop()
    }
 
 }