class paper extends BaseClass{
    constructor(x,y){
      super(x,y,50,50);
   //   this.image = loadImage("sprites/bird.png");
    }
    display(){
      function keyPressed(){
          if(keyCode === UP_ARROW)
          Matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85,y:85})
      }
      super.display();
    }
  }