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
