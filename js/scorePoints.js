class Scorepoints {
constructor(ctx) {
  this.ctx = ctx;
  this.ctx.font = "20px Arcade Normal";
  this.image = new Image();
  this.image.src = "./img/nice.png";
}

draw(score) {
  this.ctx.beginPath();
  this.ctx.fillStyle = "#fab205";
  this.ctx.fillText("CONQUEST:" + " " + `${score}` + " / 50", 5, 40);
  this.ctx.rect(0, 60, (score*10), 40);
  this.ctx.fillStyle = "#fab205";
  this.ctx.fill();
  this.ctx.stroke();
  this.ctx.drawImage(this.image, (score*10), 50, 50, 50);
}
}