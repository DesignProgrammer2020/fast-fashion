//draw smoke floating
class Smoke{

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    // make the smoke move across and up simultaneously

    //x function

    this.y <= height*0.5;

    this.x += 10;
    //make smoke reaappear from left hand side
    if (this.x >=width) {
      this.x = width-this.x;
    }

    //y function
    this.y -= 10;
    if (this.y <= height*0.1) {
      this.y = height*0.5-this.y;
    }

  }

  display(x, y) {

    //make all smoke transparent; so "CARBON EMISSIONS" can be seen underneath
    push();
    translate(this.x, this.y);
    fill(15, 200);
    circle(25, 40, 45);
    circle(45, 38, 50);
    circle(70, 55, 50);
    pop();

    push();
    translate(this.x, this.y);
    fill(25, 200);
    circle(30, 50, 50);
    circle(55, 52, 55);
    circle(80, 55, 45);
    pop();

    push();
    translate(this.x, this.y);
    fill(50, 200);
    circle(35, 75, 50);
    circle(55, 82, 50);
    circle(75, 90, 40);
    pop();
  }
}
