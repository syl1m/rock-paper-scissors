// JS file for playing RPS with a UI

// Add event listeners to run playRound function when buttons are clicked
let playerScore = 0,
    computerScore = 0,
    playerSelection,
    computerSelection,
    roundResult,
    gameResult;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (e) => {
    playerSelection = e.target.innerText;
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    playRound(playerSelection,computerSelection);
    }
));


// Function to randomly return Rock, Paper, or Scissors
function getComputerChoice() {
    
    const x = Math.floor((Math.random()*3)); // Randomly generate an integer value of 0, 1, or 2
    
    // Assign computerChoice variable to string of 'Rock', 'Paper', or 'Scissors' based on randomly generated integer
    const computerChoice = (x === 0) ? 'Rock' : 
        (x === 1) ? 'Paper' : 'Scissors';
    return computerChoice;
}

// Function to play a round of Rock Paper Scissors (RPS)
function playRound(playerSelection, computerSelection) {     
    // Get result of round (Tie, win, or loss)
    
    switch (true) {
        // Tie
        case playerSelection === computerSelection:
            roundResult = 'tie';
            break;

        // Player Wins
        case (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper'):
            roundResult = 'win';
            break;

        // Player Loses as default case
        default:
            roundResult = 'loss';
    }
    return roundResult;
}

// Function to end game once either player has 5 wins
function game() {
    let playerScore = 0,
        computerScore = 0,
        playerSelection,
        computerSelection,
        roundResult,
        gameResult;
        
    for (let i = 1; i < 6; i++) {  
        //computerSelection = getComputerChoice();
        //roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 'tie') {
            console.log(`Round ${i}: It's a tie! Both players selected ${playerSelection}.`);
            console.log(`Player to Computer Score: ${playerScore}-${computerScore}`);
        } else if (roundResult === 'win') {
            ++playerScore;
            console.log(`Round ${i}: You Win! ${playerSelection} beats ${computerSelection}.`);
            console.log(`Player to Computer Score: ${playerScore}-${computerScore}`);
        } else {
            ++computerScore;
            console.log(`Round ${i}: You Lose! ${computerSelection} beats ${playerSelection}.`);
            console.log(`Player to Computer Score: ${playerScore}-${computerScore}`);
        }
    }

    if (playerScore === computerScore) {
        gameResult = "It's a tie game !  Refresh page to play again.";
    } else if (playerScore > computerScore) {
        gameResult = "Winner, winner, winner!  Refresh page to play agaiin.";
    } else {
        gameResult = "You lost to the computer.  Better luck next time! Refresh page to play again.";
    }

    return gameResult;
}

