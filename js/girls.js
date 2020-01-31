class Girl {
    constructor(ctx, w, h){
      this.ctx = ctx;
      this.width = 400;
      this.height = 400;
  
      this.image = new Image();
      this.image.src = "./img/nice.png";
  
      this.posX = 540;
      this.posY = 140;
    }
  
    draw() {
      this.posY--
      this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}