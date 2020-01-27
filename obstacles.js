class Obstacle {
    constructor(ctx, gameWidth, gameHeight, playerPosY0, playerHeight) {
      this.ctx = ctx;
      this.width = 50;
      this.height = this.width * 1;

      this.image = new Image();
      this.image.src = "./img/muñeco.jpg";
  
      this.posX = gameWidth;
      this.posY = playerPosY0 + playerHeight - this.height;
  
      this.velX = 10;
    }
  
    draw() {
      this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
  
    move() {
      this.posX -= this.velX;
    }
  }