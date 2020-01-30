class Nice {
    constructor(ctx, w, h) {
      this.ctx = ctx;
      this.width = 150;
      this.height = 150;
  
      this.image = new Image();
      this.image.src = "./img/Nice.png";
  
      this.posX = 50;
      this.posY = 150;
    }
  
    draw() {
    //   this.posY-- 
      this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}