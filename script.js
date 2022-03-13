let result = "";


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
    console.log("Heç kim qalib olmadı!");
    div.textContent = result;
    return result;
  } else if (playerSelection == "daş") {
    if (computerSelection == "qayçı") {
      result = "Sən qazandın!";
      console.log("Sən qazandın!");
      div.textContent = result;
      return result;
    } else {
      result = "Sən uduzdun!";
      console.log("Sən uduzdun!");
      div.textContent = result;
      return result;
    }
  } else if (playerSelection == "kağız") {
    if (computerSelection == "daş") {
      result = "Sən qazandın!";
      console.log("Sən qazandın!");
      div.textContent = result;
      return result;
    } else {
      result = "Sən uduzdun!";
      console.log("Sən uduzdun!");
      div.textContent = result;
      return result;
    }
  } else if (playerSelection == "qayçı") {
    if (computerSelection == "kağız") {
      result = "Sən qazandın!";
      console.log("Sən qazandın!");
      div.textContent = result;
      return result;
    } else {
      result = "Sən uduzdun!";
      console.log("Sən uduzdun!");
      div.textContent = result;
      return result;
    }
  }
  return result;
}


const btnRock = document.createElement("button");
btnRock.addEventListener('click', () => playRound('daş', computerPlay()));
btnRock.innerHTML = "daş";
btnRock.style.padding = "75px 75px";
btnRock.style.margin = "10px";
document.body.appendChild(btnRock);

const btnPaper = document.createElement("button");
btnPaper.addEventListener('click', () => playRound('kağız', computerPlay()));
btnPaper.innerHTML = "kağız";
btnPaper.style.padding = "75px 75px";
btnPaper.style.margin = "10px";
document.body.appendChild(btnPaper);

const btnScissors = document.createElement("button");
btnScissors.addEventListener('click', () => playRound('qayçı', computerPlay()));
btnScissors.innerHTML = "qayçı";
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