// JS file for playing RPS with a UI

// Add event listeners to run playRound function when buttons are clicked
const resultDiv = document.createElement('div');
const score = document.createElement('div');
const endGameDiv = document.createElement('div');
const container = document.querySelector('.result');

container.appendChild(resultDiv);
container.appendChild(score);
container.appendChild(endGameDiv);

let playerScore = 0,
    computerScore = 0,
    round = 0,
    playerSelection,
    computerSelection,
    gameResult;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (e) => {
    playerSelection = e.target.innerText;
    computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    endGameDiv.textContent = ('');
    endGame();
    }
));

// Randomly return Rock, Paper, or Scissors as the computer choice
function getComputerChoice() {
    
    const x = Math.floor((Math.random()*3)); // Randomly generate an integer value of 0, 1, or 2
    
    // Assign computerChoice variable to string of 'Rock', 'Paper', or 'Scissors' based on randomly generated integer
    const computerChoice = (x === 0) ? 'Rock' : 
        (x === 1) ? 'Paper' : 'Scissors';
    return computerChoice;
}

// Play a round of Rock Paper Scissors (RPS)
function playRound(playerSelection, computerSelection) {     
    // Get result of round (Tie, win, or loss)
    round++
    switch (true) {
        // Tie
        case playerSelection === computerSelection:
            resultDiv.textContent = (`Round ${round}: It's a tie! Both players selected ${playerSelection}.`);
            break;

        // Player Wins
        case (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper'):
            ++playerScore;
            resultDiv.textContent = (`Round ${round}: You Win! ${playerSelection} beats ${computerSelection}.`);
            break;

        // Player Loses as default case
        default:
            ++computerScore;
            resultDiv.textContent = (`Round ${round}: You Lose! ${computerSelection} beats ${playerSelection}.`);
    }
    score.textContent = (`Player to Computer Score: ${playerScore}-${computerScore}`);
    return;
}

// End game once either player has 5 wins
function endGame() {
    
    if (playerScore !== 5 && computerScore !== 5) return;

    if (playerScore === 5) {
        gameResult = "Winner, winner, winner!  Refresh page to play again.";
    } else if (computerScore === 5) {
        gameResult = "You lost to the computer.  Better luck next time! Refresh page to play again.";
    }

    // Reset game
    playerScore = 0,
    computerScore = 0,
    round = 0;

    endGameDiv.textContent = (gameResult);
}