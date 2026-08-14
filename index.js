var dice1 = Math.floor(Math.random() * 6);
var dice2 = Math.floor(Math.random() * 6);
var dice = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
  var heading = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1  Wins!";
  } else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 Wins! 🚩";
  } else {
    heading.textContent = "Draw!";
  }
}
document.querySelector("h1").addEventListener("click", rollDice);
