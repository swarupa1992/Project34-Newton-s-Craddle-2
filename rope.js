class Rope {
    constructor(bodyA,pointB){ //bodyA = bob,bodyB = roof

        
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness :1 ,
            angularStiffness :1,
            length :0
            
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display() {

        var pointA = this.rope.bodyA.position;//bob
        var pointBn = this.pointB;//roof
        console.log(pointA);
        console.log(pointBn);
        push();
        strokeWeight(2);
        stroke("black");
        line(pointA.x,pointA.y,pointBn.x ,pointBn.y);
        pop(); 
    }
}

