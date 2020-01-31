window.onload = () => {
  document.getElementById("game-over").style.display= "none";
  document.addEventListener("keydown", e => {
  if (e.keyCode === 13){
    game.init();
    }
  });
  document.getElementById("restart").onclick = function () {
    document.getElementById("myCanvas").style.display= "block";
    document.getElementById("game-over").style.display= "none";
    document.getElementById("game-win").style.display= "none";
    game.restart();
    game.init();
  }
    
};
