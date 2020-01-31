class Gameover {
    constructor(ctx, w, h) {
      this.ctx = ctx;
      this.width = 400;
      this.height = 400;
  
      this.image = new Image();
      this.image.src = "./img/game-over.png";
  
      this.posX = 540;
      this.posY = 100;
    }
  
    draw() {
      this.posY--
      this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}