const moves = document.querySelector("#moves");
let message = document.querySelector("#message");

moves.addEventListener("click", playRound);

// Plays a single round of Rock, Paper, Scissors, then returns a number representing the result
function playRound(event) {
  if (event.target.tagName === "BUTTON") {
    // Get the moves from both the computer and the human
    let computerChoice = getComputerChoice();
    let humanChoice = event.target.textContent;

    let result = determineWinner(computerChoice, humanChoice);

    // Print a message of the results to the console log, and increment the winner's global score
    switch (result) {
      case 0:
        message.textContent = `Double ${humanChoice}! It's a tie.`
        break;

      case 1:
        message.textContent = `I win! ${computerChoice} beats ${humanChoice}.`
        break;

      case 2:
        message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
        break;
    }
  }
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

// Asks the human to input "Rock", "Paper", or "Scissors" and returns their answer
function getHumanChoice() {
  // Loop until a valid move is made
  while (true) {
    // Prompt the human to enter their move (case-insensitive)
    let move = prompt("Rock, Paper, Scissors!");
    move = move ? capitalize(move) : move;

    // Include shorthand moves (r, p, s) for easier typing
    // If the move is not valid, alert the human
    switch (move) {
      case "Rock":
      case "R":
        return "Rock";

      case "Paper":
      case "P":
        return "Paper";

      case "Scissors":
      case "S":
        return "Scissors";

      default:
        alert("That's not a valid move!");
    }
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
