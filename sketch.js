const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;
var turns=1
var bg
var engine;
var world;
var boundary1,boundary2,boundary3,boundary4;
var white1
var white2
var white3
var white4
var white5
var white6
var white7
var white8
var carrom;
var black1
var gameState='play'
var red
var black2;var black3
var black7
var black4
var black5
var striker
var slingshot;
var boundary5;
var s=0;
function preload(){
  
}

function setup(){
   createCanvas(windowWidth,windowHeight)
   engine= Engine.create()
   world= engine.world;
 
   carrom= new Carrom(0,0)
   white1= new white(400,380)
   black1= new black(418,390)
   white2= new white(419,410)
   black2= new black(400,420)
   white3= new white(380,410)
   black3= new black(382,390)
  red= new Red(400,400)
  white4= new white(400,360)
  white5= new white(438,420)
  white6= new white(362,420)
  black4= new black(364,400)
  boundary5= new Boundary(730,65,10,1)
  boundary6= new Boundary(735,70,1,10)
  boundary7= new Boundary(70,65,10,1)
  boundary8= new Boundary(65,70,1,10)
  boundary9= new Boundary(730,735,10,1)
  boundary10= new Boundary(735,730,1,10)
  boundary11= new Boundary(70,735,10,1)
  boundary12= new Boundary(65,730,1,10)
    boundary4= new Boundary(45,400,30,800)
    boundary3= new Boundary(755,400,30,800)
    boundary2= new Boundary(400,45,800,30)
    boundary1= new Boundary(400,755,800,30)
    black5= new black(382,370)
    black6= new black(418,370)
    black7= new black(418,430)
    black8= new black(382,430)
    black9= new black(436,400)
    white7= new white(400,440)
    white8= new white(364,380)
    white9= new white(436,380)
    striker= new Striker(400,640)
    slingshot= new SlingShot(striker.body,{x:250,y:650})
   world.gravity.y=0;
}

function draw(){
   // frameRate(1)
    background(250)
    stroke(0)
    fill(0)
    textAlign(CENTER)
    print(s)
    textSize(30)
    text('Lets Practice Carrom!',1100,100)
     text('Press Space key to get Multiple turns',1100,200)
     text('Turns Taken: '+ turns,1100,300)
   Engine.update(engine)
    carrom.show()
    white6.show()
    white1.show()
    white2.show()
    white3.show()
    white5.show()
    white4.show()
    black1.show()
    black2.show()
    black3.show()
    black4.show()
    black5.show()
    black6.show()
    black7.show()
    red.show()
    black8.show()
    black9.show()
    white7.show()
    white8.show()
    white9.show()
    striker.show()
    slingshot.display()
   
    detectCollison(red,boundary5)
    detectCollison(red,boundary6)
    detectCollison(red,boundary7)
    detectCollison(red,boundary8)
    detectCollison(red,boundary9)
    detectCollison(red,boundary10)
    detectCollison(red,boundary11)
    detectCollison(red,boundary12)
    detectCollison(white1,boundary5)
    detectCollison(white1,boundary6)
    detectCollison(white1,boundary7)
    detectCollison(white1,boundary8)
    detectCollison(white1,boundary9)
    detectCollison(white1,boundary10)
    detectCollison(white1,boundary11)
    detectCollison(white1,boundary12)
    detectCollison(white2,boundary5)
    detectCollison(white2,boundary6)
    detectCollison(white2,boundary7)
    detectCollison(white2,boundary8)
    detectCollison(white2,boundary9)
    detectCollison(white2,boundary10)
    detectCollison(white2,boundary11)
    detectCollison(white2,boundary12)
    detectCollison(white3,boundary5)
    detectCollison(white3,boundary6)
    detectCollison(white3,boundary7)
    detectCollison(white3,boundary8)
    detectCollison(white3,boundary9)
    detectCollison(white3,boundary10)
    detectCollison(white3,boundary11)
    detectCollison(white3,boundary12)
    detectCollison(white4,boundary5)
    detectCollison(white4,boundary6)
    detectCollison(white4,boundary7)
    detectCollison(white4,boundary8)
    detectCollison(white4,boundary9)
    detectCollison(white4,boundary10)
    detectCollison(white4,boundary11)
    detectCollison(white4,boundary12)
    detectCollison(white5,boundary5)
    detectCollison(white5,boundary6)
    detectCollison(white5,boundary7)
    detectCollison(white5,boundary8)
    detectCollison(white5,boundary9)
    detectCollison(white5,boundary10)
    detectCollison(white5,boundary11)
    detectCollison(white5,boundary12)
    detectCollison(white6,boundary5)
    detectCollison(white6,boundary6)
    detectCollison(white6,boundary7)
    detectCollison(white6,boundary8)
    detectCollison(white6,boundary9)
    detectCollison(white6,boundary10)
    detectCollison(white6,boundary11)
    detectCollison(white6,boundary12)
    detectCollison(white7,boundary5)
    detectCollison(white7,boundary6)
    detectCollison(white7,boundary7)
    detectCollison(white7,boundary8)
    detectCollison(white7,boundary9)
    detectCollison(white7,boundary10)
    detectCollison(white7,boundary11)
    detectCollison(white7,boundary12)
    detectCollison(white8,boundary5)
    detectCollison(white8,boundary6)
    detectCollison(white8,boundary7)
    detectCollison(white8,boundary8)
    detectCollison(white8,boundary9)
    detectCollison(white8,boundary10)
    detectCollison(white8,boundary11)
    detectCollison(white8,boundary12)
    detectCollison(white9,boundary5)
    detectCollison(white9,boundary6)
    detectCollison(white9,boundary7)
    detectCollison(white9,boundary8)
    detectCollison(white9,boundary9)
    detectCollison(white9,boundary10)
    detectCollison(white9,boundary11)
    detectCollison(white9,boundary12)
    
   
    detectCollison(black1,boundary5)
    detectCollison(black1,boundary6)
    detectCollison(black1,boundary7)
    detectCollison(black1,boundary8)
    detectCollison(black1,boundary9)
    detectCollison(black1,boundary10)
    detectCollison(black1,boundary11)
    detectCollison(black1,boundary12)
    detectCollison(black2,boundary5)
    detectCollison(black2,boundary6)
    detectCollison(black2,boundary7)
    detectCollison(black2,boundary8)
    detectCollison(black2,boundary9)
    detectCollison(black2,boundary10)
    detectCollison(black2,boundary11)
    detectCollison(black2,boundary12)
    detectCollison(black3,boundary5)
    detectCollison(black3,boundary6)
    detectCollison(black3,boundary7)
    detectCollison(black3,boundary8)
    detectCollison(black3,boundary9)
    detectCollison(black3,boundary10)
    detectCollison(black3,boundary11)
    detectCollison(black3,boundary12)
    detectCollison(black4,boundary5)
    detectCollison(black4,boundary6)
    detectCollison(black4,boundary7)
    detectCollison(black4,boundary8)
    detectCollison(black4,boundary9)
    detectCollison(black4,boundary10)
    detectCollison(black4,boundary11)
    detectCollison(black4,boundary12)
    detectCollison(black5,boundary5)
    detectCollison(black5,boundary6)
    detectCollison(black5,boundary7)
    detectCollison(black5,boundary8)
    detectCollison(black5,boundary9)
    detectCollison(black5,boundary10)
    detectCollison(black5,boundary11)
    detectCollison(black5,boundary12)
    detectCollison(black6,boundary5)
    detectCollison(black6,boundary6)
    detectCollison(black6,boundary7)
    detectCollison(black6,boundary8)
    detectCollison(black6,boundary9)
    detectCollison(black6,boundary10)
    detectCollison(black6,boundary11)
    detectCollison(black6,boundary12)
    detectCollison(black7,boundary5)
    detectCollison(black7,boundary6)
    detectCollison(black7,boundary7)
    detectCollison(black7,boundary8)
    detectCollison(black7,boundary9)
    detectCollison(black7,boundary10)
    detectCollison(black7,boundary11)
    detectCollison(white7,boundary12)
    detectCollison(black8,boundary5)
    detectCollison(black8,boundary6)
    detectCollison(black8,boundary7)
    detectCollison(black8,boundary8)
    detectCollison(black8,boundary9)
    detectCollison(black8,boundary10)
    detectCollison(black8,boundary11)
    detectCollison(black8,boundary12)
    detectCollison(black9,boundary5)
    detectCollison(black9,boundary6)
    detectCollison(black9,boundary7)
    detectCollison(black9,boundary8)
    detectCollison(black9,boundary9)
    detectCollison(black9,boundary10)
    detectCollison(black9,boundary11)
    detectCollison(black9,boundary12)
}   
function detectCollison(AStone,BMango){
	
	
	var distance= dist(AStone.body.position.x,AStone.body.position.y,BMango.body.position.x,BMango.body.position.y)
	
    if(distance<=22){
		AStone.vanish();
    AStone.update()
       World.remove(world,AStone.body)
	}
}

function mouseDragged(){
    if(gameState=='play')
    Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
  gameState='end'
}
function keyPressed(){
    if(keyCode=== 32){
        Matter.Body.setPosition(striker.body, {x: 250 , y: 650});
        slingshot.attach(striker.body)
        turns++;
        gameState='play'
      
    }
}