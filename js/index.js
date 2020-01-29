window.onload = () => {
  document.addEventListener("keydown", e => {
  if (e.keyCode === 13){
    game.init();
    }
  });
};
