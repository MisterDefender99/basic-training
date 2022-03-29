function gamePlay(currChance, player1Score, player2Score, goal) {
  if (currChance == 0) {
    console.log("Player-1 Chance");
    let diceOutcome = Math.floor(Math.random() * 6) + 1;
    console.log("Player-1 got ", diceOutcome, " in dice roll");
    player1Score += diceOutcome;
    if (player1Score >= goal) {
      console.log("Player-1 wons the Game with a score ", player1Score);
      return 0;
    }
    if (diceOutcome != 6) {
      currChance = 1;
    }
  } else {
    console.log("Player-2 Chance");
    diceOutcome = Math.floor(Math.random() * 6) + 1;
    console.log("Player-2 got ", diceOutcome, " in dice roll");
    player2Score += diceOutcome;
    if (player2Score >= goal) {
      console.log("Player-2 wons the Game with a score ", player2Score);
      return 0;
    }
    if (diceOutcome != 6) {
      currChance = 0;
    }
  }
  gamePlay(currChance, player1Score, player2Score, goal);
}

(function () {
  const prompt = require("prompt-sync")();
  let goal = parseInt(prompt("Enter the goal score to win the game: "));
  let toss = Math.floor(Math.random() * 2);
  toss == 0
    ? console.log("Player-1 starts the game first")
    : console.log("Player-2 starts the game first");
  let player1Score = 0,
    player2Score = 0;
  gamePlay(toss, player1Score, player2Score, goal);
})();