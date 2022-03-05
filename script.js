function computerPlay() {
  let random = Math.floor(Math.random() * 3);

  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      return "You win!";
    } else {
      return "You lose!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "You win!";
    } else {
      return "You lose!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
}


for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper, or scissors?");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}