const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block,platform,polygon,sling,polygon_img;

function preload (){

    //polygon_img = loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(600,height,1200,20);
    
    
   // platform = new Ground(150, 305, 300, 170);
   

    //level one
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);

   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   
   block16 = new Block(390,155,30,40);
   
   options={
    isStatic: true
  
}

platform= new Ground(395,275,200,20,options);
World.add(world, platform );

var options = {
    'restitution':0.8,
    'friction':1.0, 
    'density':1.0
}
polygon = Bodies.circle(50,200,20,options);
World.add(world,polygon)
polygon_img = loadImage("polygon.png");

slingshot = new SlingShot(this.polygon,{x:75, y:200});




}
function draw(){
    background("blue");
    Engine.update(engine);
    //ellipseMode(RADIUS);
//   
    ground.display();
    platform.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    slingshot.display();
   
     
    // ellipse(polygon_img,polygon.position.x,polygon.position.y,20,20);

    imageMode(CENTER);
       image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}


function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}






