class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;
    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 180;
    this.height = 150;

    this.image = new Image();
    this.image.src = "./img/ChichoSprite.png";

    this.posX = 100;
    this.posY = 550;
    this.posY0 = this.posY;

    this.image.frames = 10;
    this.image.framesIndex = 0;

    this.keys = keys;

    this.velY = 5;

    this.setListeners();
  }

  draw(framesCounter) {
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


  move() {
    let gravity = 0.4;

    if (this.posY < this.posY0) {
      this.posY += this.velY;
      this.velY += gravity;
    } else {
      this.posY = this.posY0;
      this.velY = 3;
    }

  }

  animate(framesCounter) {
    if (framesCounter % 5 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex > this.image.frames - 1) {
      this.image.framesIndex = 0;
    }
  }

  setListeners() {
    document.addEventListener("keydown", e => {
          if (e.keyCode === 32){
            this.posY -= 40;
            this.velY -= 10;
          } else {
            this.posY = this.posY0;
            this.velY = 1;
          }
    });
  }
}
