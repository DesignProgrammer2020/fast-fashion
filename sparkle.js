class Sparkle {
  
  constructor(){
    this.x = random(0, width);
    this.y = random(height*0.1, height*0.9);
    this.r = random(6, 15);
    this.s = random(5, 12);
  }
  
  display(){
    //light colored circles
    push();
    fill(random(120, 255), random(120, 255), random(120, 255));
    circle(this.x, this.y, this.r);
    pop();
    
    //light colored squares
    push();
    rectMode(CENTER);
    translate(-width*0.3, height*0.15)
    fill(random(120, 255), random(120, 255), random(120, 255));
    circle(this.x, this.y, this.s);
    pop();
    
    //red/bright pink squares
    push();
    rectMode(CENTER);
    translate(width*0.2, height*0.1);
    fill(random(140, 255), random(135), random(135));
    square(this.x, this.y, this.s);
    pop();
    
    //red circles
    push();
    translate(width*0.3, 0);
    fill(random(140, 255), random(135), random(135));
    circle(this.x, this.y, this.r);
    pop();
    
    //silver circles
    push();
    translate(-width*0.2, 0);
    fill(random(120, 255));
    circle(this.x, this.y, this.r);
    pop();
    
    //silver squares
    push();
    rectMode(CENTER);
    translate(-width*0.1, 0);
    fill(random(120, 255));
    square(this.x, this.y, this.s);
    pop();
  }
}