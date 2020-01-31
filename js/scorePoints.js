// const scorePoints = {
//     ctx: undefined,
  
//     init(ctx) {
//       this.ctx = ctx;

//       this.ctx.font = "30px Arcade Normal";
//     },
  
//     update(score) {
//       // this.ctx.fillRect(550, 20, 400, 300);
//       // this.ctx.beginPath();
//       // this.ctx.strokeStyle = 'yellow';
//       // this.ctx.lineWidth = 4;
//       // this.ctx.lineJoin = "bevel";
//       // this.ctx.moveTo(598, 20);
//       // this.ctx.lineTo(902, 20);
//       // this.ctx.stroke();
//       // this.ctx.moveTo(600, 90);
//       // this.ctx.lineTo(900, 90);
//       // this.ctx.stroke();
//       // this.ctx.moveTo(900, 20);
//       // this.ctx.lineTo(900, 180);
//       // this.ctx.stroke();
//       // this.ctx.moveTo(902, 180);
//       // this.ctx.lineTo(598, 180);
//       // this.ctx.stroke();
//       // this.ctx.moveTo(600, 180);
//       // this.ctx.lineTo(600, 20);
//       // this.ctx.stroke();
//       // this.ctx.closePath();

//       this.ctx.fillStyle = "yellow";
//       this.ctx.fillText("Score", 680, 65);
//       this.ctx.fillText(Math.floor(score), 735, 150);
//       // this.ctx.fillText("Time", 690, 160);
//     }
//   };

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
  this.ctx.rect(0, 50, score, 40);
  this.ctx.fillStyle = "##fab205";
  this.ctx.fill();
  this.ctx.stroke();
  this.ctx.drawImage(this.image, score, 50, 50, 50);
}
}