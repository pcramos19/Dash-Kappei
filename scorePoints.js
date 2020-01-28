const scorePoints = {
    ctx: undefined,
  
    init(ctx) {
      this.ctx = ctx;

      this.ctx.font = "30px Arcade Normal";
    },
  
    update(score) {
      // this.ctx.fillRect(550, 20, 400, 300);
      // this.ctx.strokeStyle = 'yellow';
      // this.ctx.lineWidth = 4;
      // this.ctx.lineJoin = "bevel";
      // this.ctx.moveTo(598, 20);
      // this.ctx.lineTo(902, 20);
      // this.ctx.stroke();
      // this.ctx.moveTo(600, 90);
      // this.ctx.lineTo(900, 90);
      // this.ctx.stroke();
      // this.ctx.moveTo(900, 20);
      // this.ctx.lineTo(900, 180);
      // this.ctx.stroke();
      // this.ctx.moveTo(902, 180);
      // this.ctx.lineTo(598, 180);
      // this.ctx.stroke();
      // this.ctx.moveTo(600, 180);
      // this.ctx.lineTo(600, 20);
      // this.ctx.stroke();

      this.ctx.fillStyle = "yellow";
      this.ctx.fillText("Score", 680, 65);
      this.ctx.fillText(Math.floor(score), 735, 150);
      // this.ctx.fillText("Time", 690, 160);
    }
  };