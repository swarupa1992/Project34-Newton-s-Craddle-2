class Bob
{
	constructor(x,y)
	{
			var options={
				
				restitution:1,
				//friction:0,
				//frictionAir:0.0,
				//slop :1,
				//inertia :Infinity
				
				}	
		
		this.body=Bodies.circle(x, y, 25 ,options);
		//this.body = Bodies.rectangle(x,y,40,40,options);
		this.x = x;
		this.y = y;
		//this.color = color;
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;	
			var angle = this.body.angle;
			push();
			translate(pos.x,pos.y);
			rotate(angle);
			stroke("black");
			fill("grey");
			ellipse(0,0,50,50);
			pop();
					
	}

}
