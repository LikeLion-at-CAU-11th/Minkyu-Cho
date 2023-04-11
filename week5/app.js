const myHandText = document.getElementById("my-display-text");
const myHandIcon = document.getElementById("my-hand-icon");
const myHandScore = document.getElementById("my-score");
const computerText = document.getElementById("computer-display-text");
const computerIcon = document.getElementById("computer-hand-icon");
const computerScore = document.getElementById("com-score");
const box = document.getElementById("dark-button");
const themeColor = document.getElementById("dark-theme");
const contentColor = document.getElementById("content-wrapper");

const result = document.getElementById("display-result");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const resetBtn = document.getElementById("reset-button");

rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);
resetBtn.addEventListener("click", resetScore);
box.addEventListener("click", changeColor);

function displayMyChoice(e) {
  let clickedBtn = e.currentTarget.id;
  let clickedIcon = e.target;
  //   console.log(clickedBtn);
  //   console.log(clickedIcon);

  myHandText.innerText = clickedBtn;
  myHandIcon.className = clickedIcon.className;

  StartGame(clickedBtn);
}

function resetScore() {
  myScore = 0;
  comScore = 0;
  myHandScore.innerText = myScore;
  computerScore.innerText = comScore;
}

function changeColor() {
  if (themeColor.style.backgroundColor == "black") {
    themeColor.style.backgroundColor = "white";
    themeColor.style.color = "black";
    contentColor.style.border = "black 4px solid";
    box.style.color = "black";
    box.style.borderColor = "black";
    resetBtn.style.backgroundColor = "black";
    resetBtn.style.color = "white";
  } else {
    themeColor.style.backgroundColor = "black";
    themeColor.style.color = "white";
    contentColor.style.border = "white 4px solid";
    box.style.color = "white";
    box.style.borderColor = "white";
    resetBtn.style.backgroundColor = "white";
    resetBtn.style.color = "black";
  }
}

function getComputerChoice() {
  const randomValue = {
    0: ["rock", "fa-regular fa-hand-back-fist"],
    1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
    2: ["paper", "fa-regular fa-hand"],
  };

  const randomIndex = Math.floor(Math.random() * 3);

  return randomValue[randomIndex];
}

function displayComChoice(result) {
  computerText.innerText = result[0];
  computerIcon.className = result[1];
}

function changeScore() {
  if (result.innerText == "win") {
    myHandScore.innerText = 3 * parseInt(myHandScore.innerText) + 1;
    computerScore.innerText = -2 * parseInt(computerScore.innerText) - 2;
  } else if (result.innerText == "lose") {
    computerScore.innerText = 3 * parseInt(myHandScore.innerText) + 1;
    myHandScore.innerText = -2 * parseInt(computerScore.innerText) - 2;
  }
}

function StartGame(myChoice) {
  const computerChoice = getComputerChoice();

  displayComChoice([computerChoice[0], computerChoice[1]]);

  console.log(myChoice[0] + computerChoice[0][0]);

  switch (myChoice[0] + computerChoice[0][0]) {
    case "rs":
    case "sp":
    case "pr":
      result.innerText = "win";
      break;
    case "rr":
    case "ss":
    case "pp":
      result.innerText = "tie";
      break;
    case "sr":
    case "ps":
    case "rp":
      result.innerText = "lose";
      break;
  }
  changeScore();
}
