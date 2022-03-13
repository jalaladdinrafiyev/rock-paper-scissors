let result = "";


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
    result = "It's a tie!";
    console.log("It's a tie!");
    div.textContent = result;
    return result;
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      result = "You win!";
      console.log("You win!");
      div.textContent = result;
      return result;
    } else {
      result = "You lose!";
      console.log("You lose!");
      div.textContent = result;
      return result;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "You win!";
      console.log("You win!");
      div.textContent = result;
      return result;
    } else {
      result = "You lose!";
      console.log("You lose!");
      div.textContent = result;
      return result;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      result = "You win!";
      console.log("You win!");
      div.textContent = result;
      return result;
    } else {
      result = "You lose!";
      console.log("You lose!");
      div.textContent = result;
      return result;
    }
  }
  return result;
}


const btnRock = document.createElement("button");
btnRock.addEventListener('click', () => playRound('rock', computerPlay()));
btnRock.innerHTML = "Rock";
btnRock.style.padding = "75px 75px";
btnRock.style.margin = "10px";
document.body.appendChild(btnRock);

const btnPaper = document.createElement("button");
btnPaper.addEventListener('click', () => playRound('paper', computerPlay()));
btnPaper.innerHTML = "Paper";
btnPaper.style.padding = "75px 75px";
btnPaper.style.margin = "10px";
document.body.appendChild(btnPaper);

const btnScissors = document.createElement("button");
btnScissors.addEventListener('click', () => playRound('scissors', computerPlay()));
btnScissors.innerHTML = "Scissors";
btnScissors.style.padding = "75px 75px";
btnScissors.style.margin = "10px";
document.body.appendChild(btnScissors);

const div = document.createElement("div");
div.style.textAlign = "center";
div.style.margin = "10px";
div.style.border = "1px solid black";
div.style.padding = "100px";
div.style.width = "300px";
document.body.appendChild(div);