const coin = document.getElementById('coin');
coin.addEventListener("click", decideSide, false);

function decideSide () {
  const flipResult = Math.random();
  coin.className = "";
  setTimeout(function(){
    if (flipResult <= 0.5) {
      coin.classList.add('heads');
    } else {
      coin.classList.add('tails');
    }
  }, 100);
}