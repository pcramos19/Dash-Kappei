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
  messages: [],
  girl: [],
  keys: {
    SPACE: 32
  },
  showMessage: false,

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
      this.clearMessages();
      this.moveAll();
      this.generateObstacles();
      this.clearObstacles();
      this.generateBasket();
      this.clearBasket();
      this.generateGirls();
      this.clearGirls();
      this.collision();
      this.winPoints();
      // this.score += 0;
      this.drawScore();
    }, 1000 / this.FPS);
  },

  setDimensions() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },

  reset() {
    this.background = new Background(this.ctx, this.width, this.height, "./img/Parquet.png");
    this.player = new Player(this.ctx, this.width, this.height, this.keys);
    this.obstacles = [];
    this.basket = [];
    this.girl = [];
    this.scorePoints = scorePoints;
    this.messages = [];
    this.tdAudio = new Howl({
      src: ['./sounds/chicho-terremoto.mp3'],
      volume: 0.2,
      autoplay: true
    });
  },

  drawAll() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.obstacles.forEach(obs => obs.draw(this.framesCounter));
    this.basket.forEach(bsk => bsk.draw(this.framesCounter));
    this.girl.forEach(n => n.draw(this.framesCounter));
    this.messages.forEach(message => {
      message.draw();
      message.fadeOut();
    })
  },

  moveAll() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(obs => obs.move())
    this.basket.forEach(bsk => bsk.move())
    this.girl.forEach(n => n.move())

  },

  generateObstacles() {
    if (this.framesCounter % 130 == 0) {
      this.obstacles.push(new Obstacle(this.ctx, this.width, this.height, this.player.posY0, this.player.height));
      console.log(this.obstacles);
    }
  },

  clearObstacles() {
    this.obstacles = this.obstacles.filter(obs => obs.posX > -obs.width);
  },

  generateBasket() {
    if (this.framesCounter % 300 == 0) {
      this.basket.push(new Basket(this.ctx, this.width, this.height, this.player.posY0, this.player.height));
      console.log(this.basket);
    }
  },

  clearBasket() {
    this.basket = this.basket.filter(bsk => bsk.posX > -bsk.width);
  },

  generateGirls() {
    if (this.framesCounter % 500 == 0) {
      this.girl.push(new Girl(this.ctx, this.width, this.height, this.player.posY0, this.player.height));
      console.log(this.girl);
    }
  },

  clearGirls() {
    this.girl = this.girl.filter(n => n.posX > -n.width);
  },

  collision() {
    this.obstacles.forEach((elm) => {
      if (this.player.posX + this.player.width -100 >= elm.posX &&
          this.player.posY + this.player.height -130 >= elm.posY &&
          this.player.posX <= elm.posX + elm.width &&
          this.player.posY <= elm.posY + elm.height) {
          return this.gameOver();
      }
  })
  },

  winPoints () {
    this.basket.some((elm) => {
      if (this.player.posX + this.player.width -80 >= elm.posX &&
          this.player.posY + this.player.height -80 >= elm.posY &&
          this.player.posX <= elm.posX + elm.width &&
          this.player.posY <= elm.posY + elm.height) {
          this.score += .15;
          this.basket.image.src = "./img/spritecanasta.png"
          this.showMessage = true;
      }
        
      if(this.showMessage) {
        console.log('three points')
        this.threePoint();
      }
      setTimeout(_=> this.showMessage = false, 5000)
     console.log(this.showMessage)
   });

    this.girl.forEach((elm) => {
     if (this.player.posX + this.player.width >= elm.posX &&
        this.player.posY + this.player.height >= elm.posY &&
        this.player.posX <= elm.posX + elm.width &&
        this.player.posY <= elm.posY + elm.height) {
        this.score += .3;
        this.nice()
    }
    })
  },

  threePoint () {
    this.ctx.fillText("3 POINTS", 100, 100);
    const tdAudio = new Howl({
      src: ['./sounds/three-points.mp3'],
      volume: 0.4,
      autoplay: true
  });
  },

  generateMessages(){
    this.basket.forEach((elm) => {
      if (this.winPoints()) {
          this.messages.push(new Message(this.ctx, this.width, this.height))
      }
    });
  },

  clearMessages () {
    this.messages = this.messages.filter(message => message.posY > 0);
  },

  drawScore() {
    this.scorePoints.update(this.score);
  },

  gameOver() {
    clearInterval(this.interval)
    setTimeout(() => {
    document.getElementById("game-over").style.display= "block";
    document.getElementById("myCanvas").style.display= "none";
    document.getElementById("home").style.display= "none";
    this.tdAudio.pause()
  },1000)
},

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },
};
