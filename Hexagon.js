class hexagon{

    constructor(x,y,width,height){

        var Options={
            isStatic:true
        }

    this.body=Bodies.rectangle(x,y,width,height,Options);
    this.width=40;
    this.height=40;
    this.image=loadImage("polygon.png");

    World.add(world,this.body);
    
    }
    display(){
        var place=this.body.position;
        imageMode(CENTER);  
        image(this.image,place.x,place.y,this.width,this.height);
    }
}