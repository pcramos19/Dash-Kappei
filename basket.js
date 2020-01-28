class Basket {
    constructor(ctx, gameWidth, gameHeight, playerPosY0, playerHeight){
        this.ctx = ctx;
        this.width = 80;
        this.height = this.width;
  
        this.image = new Image();
        this.image.src = "./img/basketball-tennis-balls-clip-art-ball.jpg";

        this.posX = gameWidth;
        this.posY = 300;
  
        this.velX = 10;
    }

    draw() {
        this.velX+=.03  
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
      }
    
      move() {
        this.posX -= this.velX;
      }
}
