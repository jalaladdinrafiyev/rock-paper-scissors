let result = "";
let color = "";

function computerPlay() {
  let random = Math.floor(Math.random() * 3);

  if (random == 0) {
    return "daş";
  } else if (random == 1) {
    return "kağız";
  } else {
    return "qayçı";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result = "Heç kim qalib olmadı!";
    div.textContent = result;
    changeColor("orange");
    return result;
  } else if (playerSelection == "daş") {
    if (computerSelection == "qayçı") {
      result = "Sən qazandın!";
      div.textContent = result;
      changeColor("green");
      return result;
    } else {
      result = "Sən uduzdun!";
      div.textContent = result;
      changeColor("red");
      return result;
    }
  } else if (playerSelection == "kağız") {
    if (computerSelection == "daş") {
      result = "Sən qazandın!";
      div.textContent = result;
      changeColor("green");
      return result;
    } else {
      result = "Sən uduzdun!";
      div.textContent = result;
      changeColor("red");
      return result;
    }
  } else if (playerSelection == "qayçı") {
    if (computerSelection == "kağız") {
      result = "Sən qazandın!";
      div.textContent = result;
      changeColor("green");
      return result;
    } else {
      result = "Sən uduzdun!";
      div.textContent = result;
      changeColor("red");
      return result;
    }
  }
  return result;
}


const btnRock = document.createElement("button");
btnRock.addEventListener('click', () => playRound('daş', computerPlay()));
btnRock.innerHTML = "✊";
document.body.appendChild(btnRock);

const btnPaper = document.createElement("button");
btnPaper.addEventListener('click', () => playRound('kağız', computerPlay()));
btnPaper.innerHTML = "✋";
document.body.appendChild(btnPaper);

const btnScissors = document.createElement("button");
btnScissors.addEventListener('click', () => playRound('qayçı', computerPlay()));
btnScissors.innerHTML = "✌️";
document.body.appendChild(btnScissors);

const div = document.createElement("div");
document.body.appendChild(div);

//change color of div to green when player wins, red when computer wins and yellow when it's a draw
function changeColor(color) {
  div.style.backgroundColor = color;
}