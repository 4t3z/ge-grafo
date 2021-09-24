class Stone{
    constructor(x,y){
        var options={
            "restitution":0.8,
            "friction":2,
            "density":12
        }
        this.body=Bodies.rectangle(x,y,50,20,options);
        this.width=50;
        this.height=20;
		World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;	
        var angle = this.body.angle;	
			push()
			translate(pos.x,pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("grey");
			rect(0, 0, this.width, this.height);
			pop()
    }
}