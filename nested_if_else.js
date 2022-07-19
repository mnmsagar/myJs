let winning_number = 19;
//let userGuess = prompt("Guess a number");  // prompt is taking input in string always
//console.log(typeof userGuess, userGuess);
if (userGuess === winning_number) {
  console.log("Your Guess is Right");
} else {
  if (userGuess > winning_number) {
    console.log("Too high");
  } else {
    console.log("Too Low");
  }
}
