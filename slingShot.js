class SlingShot
{

    constructor(body1,point2)
    {

    var options = {
        bodyA:body1,
        pointB:point2,
        length:10,
        stiffness:0.03
    }

    this.chain = Constraint.create(options);
    this.sling1 = loadImage("sprites/sling1.png")
    this.sling2 = loadImage("sprites/sling2.png")
    this.sling3 = loadImage("sprites/sling3.png")


    World.add(world,this.chain);

        
}

display()
{
  image(this.sling1,280,80,40,140);
  image(this.sling2,252,70,40,100);




    if(this.chain.bodyA!==null)
    {
    
    var firstPosition = this.chain.bodyA.position
    var secondPosition = this.chain.pointB
    if(firstPosition.x<250)
    {
        push();
        strokeWeight(3)
        stroke("#7F4120")
        line(firstPosition.x-15,firstPosition.y,secondPosition.x-30,secondPosition.y)
        line(firstPosition.x-15,firstPosition.y,secondPosition.x+15,secondPosition.y)
        pop();
        
    }
   else
   {
       push();
    strokeWeight(8)
    stroke("#7F4120")
    line(firstPosition.x-15,firstPosition.y,secondPosition.x-30,secondPosition.y)
    line(firstPosition.x-15,firstPosition.y,secondPosition.x+15,secondPosition.y)
     image(this.sling3,firstPosition.x-25,firstPosition.y-20,60,30)
     pop();
   }


    }
}

fly()
{
    this.chain.bodyA=null
}

attach(bird3)
{
    this.chain.bodyA=bird3
}

}

