class Bob {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        
        this.body = Bodies.circle(x, y, 30,options);
        rope1=new rope(bobObject1.body,roof.body,-bobDiameter*2,0)
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.position;
        push();
        translate(pos.x, pos.y);    
        rotate(angle);
        strokeWeight(3);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,30,30);
        pop();
    }
}