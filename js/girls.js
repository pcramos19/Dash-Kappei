class Girl {
    constructor(ctx, gameWidth, gameHeight, playerPosY0, playerHeight){
        this.ctx = ctx;
        this.width = 200;
        this.height = this.width;
  
        this.image = new Image();
        this.image.src = "./img/girls.png";

        this.posX = gameWidth;
        this.posY = playerPosY0 + playerHeight - this.height;

        this.image.frames = 7;
        this.image.framesIndex = 0;
  
        this.velX = 10;
    }

    draw(framesCounter) {
      this.velX+=.03 
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