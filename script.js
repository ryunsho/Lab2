var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 1,
    ySpeed: 1,
    colour: "red",
    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > width-this.w || this.x < 0){
            this.xSpeed *= -1;
            this.changeColour();
        }
        if(this.y > height-this.h || this.y < 0){
            this.ySpeed *= -1;
            this.changeColour();
        }
    },
    changeColour: function(){
        this.colour = color(random(255), random(255), random(255));
    }
    //"this" refers to the object within the function
};

// redbrick.x++ returns current value then increments
// ++redbrick.x increments value and then returns

var blueBrick = {
    x: 50,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 2,
    ySpeed: 2,
    colour: "blue",
    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > width-this.w || this.x < 0){
            this.xSpeed *= -1;
            this.changeColour();
        }
        if(this.y > height-this.h || this.y < 0){
            this.ySpeed *= -1;
            this.changeColour();
        }
    },
    changeColour: function(){
        this.colour = color(random(255), random(255), random(255));
    }
};

function setup(){
    createCanvas(720, 480);
}

function draw(){
    background("antiquewhite");
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
}