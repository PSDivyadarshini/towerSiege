class rubber{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.rubber = constraint.create(options);
        World.add(world, this.rubber);
    }

    
    display(){
        if(this.rubber.bodyA){
        var pointA = this.rubber.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}