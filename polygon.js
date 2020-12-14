class poly{

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        
        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,40,40);

    }
}