class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;
    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 100;
    this.height = 100;

    this.image = new Image();
    this.image.src = "./img/logo.jpg";

    this.posX = 100;
    this.posY = 540;
    this.posY0 = this.posY;

    this.keys = keys;

    this.velY = 1;

    this.setListeners();
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
}


  move() {
    let gravity = 0.4;

    if (this.posY < this.posY0) {
      this.posY += this.velY;
      this.velY += gravity;
    } else {
      this.posY = this.posY0;
      this.velY = 1;
    }

  }

  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.TOP:
          if (this.posY >= this.posY0) {
            this.posY -= 40;
            this.velY -= 8;
            console.log("SALTANDO!");
          }
          break;
        case this.keys.SPACE:
          console.log("DISPARANDO");
          this.shoot();
          break;
      }
    });
  }
}
