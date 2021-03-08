class Carrom{
    constructor(x,y){
     
        this.x=x;
        this.y=y;
        
        //World.add(world,this.body)
        this.WImage= loadImage('images/board.png');
       
    }
    show(){
        
       push()
       
         //imageMode(CENTER)
         image(this.WImage,this.x,this.y,800,800)
        pop()
    }
 
 }