const body = document.querySelector("body");
const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const message = document.querySelector("#message");
const moves = document.querySelector("#moves");
const winMessage = document.querySelector("#winMessage");
const replay = document.createElement("button");
replay.textContent = "Replay?"

let humanScore = 0;
let computerScore = 0;

moves.addEventListener("click", playRound);
replay.addEventListener("click", replayGame);

// Plays a single round of Rock, Paper, Scissors, then returns a number representing the result
function playRound(event) {
  if (event.target.tagName === "BUTTON" && humanScore < 5 && computerScore < 5) {
    let humanChoice = event.target.textContent;
    let computerChoice = getComputerChoice();

    let result = determineWinner(humanChoice, computerChoice);

    // Print a message of the results to the console log, and increment the winner's global score
    switch (result) {
      case 0:
        message.textContent = `Double ${humanChoice}! It's a tie.`
        break;

      case 1:
        message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
        humanScore++;
        humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
        break;

      case 2:
        message.textContent = `I win! ${computerChoice} beats ${humanChoice}.`
        computerScore++;
        computerScoreDisplay.textContent = `My Score: ${computerScore}`;
        break;
    }
    if (humanScore === 5) {
      winMessage.textContent = "You win the game!";
      body.appendChild(replay);
    } else if (computerScore === 5) {
      winMessage.textContent = "I win the game!";
      body.appendChild(replay);
    }
  }
}

// Resets score and messages to their original values
function replayGame(){
  humanScore = 0;
  computerScore = 0;
  humanScoreDisplay.textContent = "My Score: 0";
  computerScoreDisplay.textContent = "My Score: 0";
  message.textContent = "First to win 5 rounds wins the game.";
  winMessage.textContent = "";
  body.removeChild(replay);
}

// Returns a string picked randomly between "Rock", "Paper", or "Scissors"
function getComputerChoice() {
  // Call the random function to get a random number between 0 and 2
  // Select one of the 3 options based on the random number

  switch (random(3)) {
    case 0:
      return "Rock";

    case 1:
      return "Paper";

    case 2:
      return "Scissors";
  }
}

// Takes two valid Rock, Paper, Scissors moves and determines the result
// 0 is returned on a tie, 1 is returned if the first move wins, and 2 is returned if the second move wins
function determineWinner(move1, move2) {
  switch (move1) {
    case "Rock":
      if (move2 === "Paper") {
        return 2;
      } else if (move2 === "Scissors") {
        return 1;
      } else {
        return 0;
      }

    case "Paper":
      if (move2 === "Scissors") {
        return 2;
      } else if (move2 === "Rock") {
        return 1;
      } else {
        return 0;
      }

    case "Scissors":
      if (move2 === "Rock") {
        return 2;
      } else if (move2 === "Paper") {
        return 1;
      } else {
        return 0;
      }
  }
}

// Returns a random whole number between 0 and (number - 1)
function random(num) {
  num *= Math.random();
  return Math.floor(num);
}

// Returns a copy of a string with only the first letter capitalized
function capitalize(str) {
  if (str.length === 1) {
    return str.toUpperCase();
  }
  let first = str.substr(0, 1);
  let rest = str.substr(1);

  first = first.toUpperCase();
  rest = rest.toLowerCase();

  return first + rest;
}
