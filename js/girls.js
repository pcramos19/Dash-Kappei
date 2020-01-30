class Girl {
    constructor(ctx, gameWidth, gameHeight, playerPosY0, playerHeight){
        this.ctx = ctx;
        this.width =110;
        this.height = 100;
  
        this.image = new Image();
        this.image.src = "./img/rosita.png";

        this.posX = gameWidth;
        this.posY = 350;

        this.image.frames = 1;
        this.image.framesIndex = 0;
  
        this.velX = 5;
    }

    draw(framesCounter) {
      this.velX+=.001 
      this.ctx.drawImage(
        this.image,
        this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
        0,
        Math.floor(this.image.width / this.image.frames),
        this.image.height,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
  
      this.animate(framesCounter);
  }

  animate(framesCounter) {
    if (framesCounter % 5 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex > this.image.frames - 1) {
      this.image.framesIndex = 0;
    }
  }
    
      move() {
        this.posX -= this.velX;
      }
}