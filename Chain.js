class Chain{
    constructor(bodyA, mypointB){
        var options = {
            bodyA: bodyA,
            pointB: mypointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB = mypointB
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
        
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
        
    }
    fly(){
        this.chain.bodyA = null;
    }
}