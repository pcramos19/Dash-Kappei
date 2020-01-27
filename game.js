const game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  score: 0,
  obstacles: [],
  keys: {
    TOP: 38,
    SPACE: 32
  },

  init() {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.start();
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
    }, 1000 / this.FPS);
  },

  setDimensions() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },

  reset() {
    this.background = new Background(this.ctx, this.width, this.height, "./img/Fondo chicho.png");
    this.player = new Player(this.ctx, this.width, this.height, this.keys);
    this.obstacles = []
  },

  drawAll() {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach(obs => obs.draw())
  },

  moveAll() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(obs => obs.move())
  },

  generateObstacles() {
    if (this.framesCounter % 100 == 0) {
      this.obstacles.push(new Obstacle(this.ctx, this.width, this.height, this.player.posY0, this.player.height));
      console.log(this.obstacles);
    }
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  gameOver() {
    clearInterval(this.interval);
  },

};
