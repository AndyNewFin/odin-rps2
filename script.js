// JS F4: odin-rps2

// function computerPlay = randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    let ranNum = Math.floor(Math.random() * 3) + 1;
    if (ranNum === 1) {
        return "rock";
    } 
    else if (ranNum === 2) {
        return "paper";
    }
    else if (ranNum === 3) {
        return "scissors";
    }
}

// function play(playerSelection, computerSelection) = defines outcome of which selection wins
// playerScore++ the ++ increment operator adds one to its operand and returns a value
function play(playerSelection, computerSelection) {
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        return `You Win! ${playerSelection} kills ${computerSelection}`;
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerScore++;
        return `You Win! ${playerSelection} kills ${computerSelection}`;
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        return `You Win! ${playerSelection} kills ${computerSelection}`;
    }
    else if (playerSelection === computerSelection) {
        return `Tie!`;
    }
    else{
        computerScore++;
        return `You Lost! ${computerSelection} kills ${playerSelection}`;
    }
}

// function compared what human types (Rock, Paper, or Scissors) to what computer randomly selects
function rps(selection) {
    if ((selection !== "rock") && (selection !== "paper") && (selection !== "scissors")) {
        alert("Please TYPE: Rock, Paper, or Scissors");
    }
    else {
        return play(selection, computerPlay());
    }
}

// i is the number of matches; the first match is zero per JS counting rules
let i = 0;

// both scores starting at zero
let playerScore = 0;
let computerScore = 0;

// this loops runs 5 matches and displays the results in the console.log
while (i < 5){
    let fight = prompt("TYPE: Rock, Paper, or Scissors!");
    fight = fight.toLowerCase();
    console.log(rps(fight));
    console.log(`Player score: ${playerScore} & Computer score: ${computerScore}`);
    i++
}

// after 5 matches, the "if" compares playerScore to computerScore to see if the playerScore is greater/les than computerScore
if (playerScore > computerScore){
    console.log("CONGRATULATIONS! YOU WIN!");
}
else if (playerScore < computerScore) {
    console.log("You Lost! The Computer Wins!");
}
// if all 5 matches results in a tie
else {
    console.log("It's a Tie!");
}