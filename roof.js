class Roof
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		
		this.body=Bodies.rectangle(300,100,300 ,10, options);
		this.w = 300;
		this.h = 10;
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;	
			push();	
			strokeWeight(4);
			fill(255);
			rectMode(CENTER);
			rect(pos.x,pos.y,300,10);//or this.w,this.h
			pop();
			
			
	}

}