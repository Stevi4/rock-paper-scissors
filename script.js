// getComputerChoice returns a string picked randomly between "rock", "paper", or "scissors"
function getComputerChoice() {
  // Call the random function to get a random number between 0 and 2
  // Select one of the 3 options based on the random number

  switch (random(3)) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";
  }
}

// random takes a number and returns a random whole number between 0 and (number - 1)
function random(num) {
  num *= Math.random();
  return Math.floor(num);
}

// getHumanChoice will ask the user to input "rock", "paper", or "scissors" and returns their answer
function getHumanChoice() {
  // Loop until a valid move is made
  while(true) {
    // Prompt the user to enter their move (case-insensitive)
    let move = prompt("Rock, Paper, Scissors!\n");
    move = move.toLowerCase();

    // Include shorthand moves (r, p, s) for easier typing
    // If the move is not valid, alert the user
    switch (move) {
      case "rock":
      case "r":
        return "rock";

      case "paper":
      case "p":
        return "paper";

      case "scissors":
      case "s":
        return "scissors";

      default:
        alert("That's not a valid move!");
    }
  }
}