let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
const userScoreParam = document.querySelector("#userscore");
const compScoreParam = document.querySelector("#compscore");
const choices = document.querySelectorAll(".choice");

const showWinner = (userWins) => {
  if (userWins) {
    userScore++;
    userScoreParam.innerText = userScore;
    console.log("User wins");
    msg.innerText = "User wins";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreParam.innerText = compScore;
    console.log("Computer wins");
    msg.innerText = "Computer wins";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  if (userChoice === compChoice) {
    console.log("It's a tie");
    msg.innerText = "It's a tie";
    msg.style.backgroundColor = "black";
  } else {
    let userWins = true;
    if (userChoice === "rock") {
      compChoice === "paper" ? (userWins = false) : (userWins = true);
    } else if (userChoice === "paper") {
      compChoice === "scissors" ? (userWins = false) : (userWins = true);
    } else {
      compChoice === "rock" ? (userWins = false) : (userWins = true);
    }
    showWinner(userWins);
  }
};

const getCompChoice = () => {
  let array = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return array[randomNumber];
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    playGame(userChoice);
  });
});
