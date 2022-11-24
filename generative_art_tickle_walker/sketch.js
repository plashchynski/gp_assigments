var time = 0;
var tickler;

function setup() {
    createCanvas(900, 600);
    background(0);

    ellipse_diameter = 40;
    randomX = random(0, width);
    randomY = random(0, height);

    tickler = new Tickler(randomX, randomY, ellipse_diameter);
}

function draw() {
    background(0);
    tickler.draw();
    tickler.checkMouseHover();
}

class Tickler {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }

    draw() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    checkMouseHover() {
        if (dist(mouseX, mouseY, randomX, randomY) < ellipse_diameter/2) {
            this.x += random(-3, 3);
            this.y += random(-3, 3);
        }
    }
}
