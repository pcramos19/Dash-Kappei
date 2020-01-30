const game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  score: 0,
  obstacles: [],
  basket: [],
  girl: [],
  keys: {
    SPACE: 32
  },
  showMessage: false,
  showGirl: false,

  init() {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.start();
    scorePoints.init(this.ctx);
  },

  start() {
    this.reset();
    this.interval = setInterval(() => {
      if (this.framesCounter > 5000) {
        this.framesCounter = 0;
      }
      this.framesCounter++;
      this.clear();
      this.drawAll();
      this.moveAll();
      this.generateObstacles();
      this.clearObstacles();
      this.generateBasket();
      this.clearBasket();
      this.generateGirls();
      this.clearGirls();
      this.collision();
      this.winPoints();
      this.score += 0;
      this.drawScore();

      if (this.showMessage) {
        this.threePoint();
      }
      if (this.showGirl) {
        this.ohmama();
      }
    }, 1000 / this.FPS);
  },

  setDimensions() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },

  reset() {
    this.background = new Background(
      this.ctx,
      this.width,
      this.height,
      "./img/Parquet.png"
    );
    this.player = new Player(this.ctx, this.width, this.height, this.keys);
    this.obstacles = [];
    this.basket = [];
    this.girl = [];
    this.scorePoints = scorePoints;
    this.tdAudio = new Howl({
      src: ["./sounds/chicho-terremoto.mp3"],
      volume: 0.1,
      autoplay: true
    });
    this.trespuntos = new Trespuntos (this.ctx,
      this.width,
      this.height);
    this.gameover = new Gameover (this.ctx,
        this.width,
        this.height);
    this.nice = new Nice (this.ctx,
          this.width,
          this.height);
  },

  drawAll() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.obstacles.forEach(obs => obs.draw(this.framesCounter));
    this.basket.forEach(bsk => bsk.draw(this.framesCounter));
    this.girl.forEach(n => n.draw(this.framesCounter));
  },

  moveAll() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(obs => obs.move());
    this.basket.forEach(bsk => bsk.move());
    this.girl.forEach(n => n.move());
  },

  generateObstacles() {
    if (this.framesCounter % 130 == 0) {
      this.obstacles.push(
        new Obstacle(
          this.ctx,
          this.width,
          this.height,
          this.player.posY0,
          this.player.height
        )
      );
      console.log(this.obstacles);
    }
  },

  clearObstacles() {
    this.obstacles = this.obstacles.filter(obs => obs.posX > -obs.width);
  },

  generateBasket() {
    if (this.framesCounter % 300 == 0) {
      this.basket.push(
        new Basket(
          this.ctx,
          this.width,
          this.height,
          this.player.posY0,
          this.player.height
        )
      );
      console.log(this.basket);
    }
  },

  clearBasket() {
    this.basket = this.basket.filter(bsk => bsk.posX > -bsk.width);
  },

  generateGirls() {
    if (this.framesCounter % 547 == 0) {
      this.girl.push(
        new Girl(
          this.ctx,
          this.width,
          this.height,
          this.player.posY0,
          this.player.height
        )
      );
      console.log(this.girl);
    }
  },

  clearGirls() {
    this.girl = this.girl.filter(n => n.posX > -n.width);
  },

  collision() {
    this.obstacles.forEach(elm => {
      if (
        this.player.posX + this.player.width - 100 >= elm.posX &&
        this.player.posY + this.player.height - 130 >= elm.posY &&
        this.player.posX <= elm.posX + elm.width &&
        this.player.posY <= elm.posY + elm.height
      ) {
        this.tdAudio.pause();
        const tdAudio = new Howl({
          src: ["./sounds/game-over.mp3"],
          volume: 0.8,
          autoplay: true
        });
        return this.gameOver();
      }
    });
  },

  winPoints() {
    this.basket.some(elm => {
      if (
        this.player.posX + this.player.width - 80 >= elm.posX &&
        this.player.posY + this.player.height - 80 >= elm.posY &&
        this.player.posX <= elm.posX + elm.width &&
        this.player.posY <= elm.posY + elm.height
      ) {
        this.score += 0.15;

        this.showMessage = true;
        const tdAudio = new Howl({
          src: ["./sounds/three-points.mp3"],
          volume: 0.6,
          autoplay: true
        });
        setTimeout(_ => (this.showMessage = false), 2000);
      }
    });

    this.girl.forEach(elm => {
      if (
        this.player.posX + this.player.width >= elm.posX &&
        this.player.posY + this.player.height >= elm.posY &&
        this.player.posX <= elm.posX + elm.width &&
        this.player.posY <= elm.posY + elm.height
      ) {
        this.showGirl = true;
        // const tdAudio = new Howl({
        //   src: ["./sounds/three-points.mp3"],
        //   volume: 0.6,
        // //   autoplay: true
        // });
        setTimeout(_ => (this.showGirl = false), 2000);
      }
    });
  },

  threePoint() {
    this.trespuntos.draw();

    setTimeout(_ => this.trespuntos.posY = this.trespuntos.posY0, 2000)
  },

  ohmama() {
    this.nice.draw();
  },


  drawScore() {
    this.scorePoints.update(this.score);
  },

  gameOver() {
    this.gameover.draw();
    clearInterval(this.interval);
    setTimeout(() => {
      document.getElementById("game-over").style.display = "block";
      document.getElementById("myCanvas").style.display = "none";
      document.getElementById("home").style.display = "none";
      
    }, 1800);
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
};
