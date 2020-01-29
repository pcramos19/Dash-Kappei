class Girl {
    constructor(ctx, gameWidth, gameHeight, playerPosY0, playerHeight){
        this.ctx = ctx;
        this.width = 80;
        this.height = this.width;
  
        this.image = new Image();
        this.image.src = "./img/Girl.jpg";

        this.posX = gameWidth;
        this.posY = playerPosY0 + playerHeight - this.height;;
  
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