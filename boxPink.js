class BoxPink {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            frictions: 0.1,
            density:0.05
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        //NameSpacing(renaming width and height)
        this.width = width + 5;
        this.height = height + 5;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        strokeWeight(3);
        fill("lightpink");
        rect(pos.x, pos.y, this.width, this.height);
    }
}