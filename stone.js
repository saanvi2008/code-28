class stone{
    constructor(x,y,r){
        var options = {
            restitution : 0,
            isStatic : false,
            friction : 1,
            density : 1.2
        }

        this.image = loadImage("stone.png");

        this.x = x;
        this.y = y;
        this.r = r;
        this.stone = Bodies.circle(this.x,this.y,this.r/2);
        World.add(world,this.stone);

    }
    display(){
        var pos = this.stone.position;

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    
    }
}