// Note: This JS file does NOT work - I tried to
    // 1) Code on my own with help from Google; TOP Discord; Stack Overflow, but could not get anything to work with my current code
    // 2) Reviewed some TOP solutions and get some inspiration, but again, could not get anything to work with my current code
    // 3) After nearly a week, I decided it was best to start this project from using with help from YouTube's Jaybees Tech Talk


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

/* rps2: 2a - remove the logic that plays 5 rounds
// this loops runs 5 matches and displays the results in the console.log
while (i < 5){
    let fight = prompt("TYPE: Rock, Paper, or Scissors!");
    fight = fight.toLowerCase();
    console.log(rps(fight));
    console.log(`Player score: ${playerScore} & Computer score: ${computerScore}`);
    i++
}
rps2: 2a */

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.className;
        const computerSelection = computerPlay();
        battleWinText.textContent = (playeRound(playerSelection, computerSelection));
        playerWinText.textContent = "Player Win totals: " + playerWin;
        computerWinText.textContent = "Computer Win totals: " + computerWin;
        endGame();
    })
})

    // create div DOM for all results
    const container = document.querySelector("#container");
    const resultsDiv = document.createElement("div");
    resultsDiv.style.marginTop = "20px",
    container.appendChild(resultsDiv);

    // create player win tracking DOM
    const playerWinText = document.createElement("p");
    playerWinText.style.color = "blue";
    playerWinText.textContent = "Player Win totals: " + playerWin;
    resultsDiv.appendChild(playerWinText);

    // create computer win tracking DOM
    const computerWinText = document.createElement("p");
    computerWinText.style.color = "blue";
    computerWinText.textContent = "Computer Win totals: " + computerWin;
    resultsDiv.appendChild(computerWinText);

    // create battle win text DOM
    const battleWinText = document.createElement("p");
    battleWinText.style.color = "black";
    resultsDiv.appendChild(battleWinText);

    // create game win text DOM
    const gameWinText = document.createElement("p");
    gameWinText.textContent = gameWinner;
    gameWinText.style.color = "orange";
    resultsDiv.appendChild(gameWinText);

    // determine who won to five points first
    function endGame() {
        if (playerWin == 5) {
            gameWinner = "You Win!";
            gameWinText.textContent = gameWinner;

            // disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;

            // create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

            // if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
            })
        } else if (computer == 5) {
            gameWinner = "Computer Wins!";
            gameWinText.textContent = gameWinner;

            // disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;

            // create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

            // if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
            })    
        }
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