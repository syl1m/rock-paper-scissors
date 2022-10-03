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
    // Reassign playerSelection string to have the same case sensitivity as computerSelection for string comparison
    // First character of string should be uppercase, all other characters should be lowercase
    playerSelection = (playerSelection.slice(0,1)).toUpperCase() + (playerSelection.slice(1)).toLowerCase();
        
    // Get result of round (Tie, win, or loss)
    let result;
    switch (true) {
        // Tie
        case playerSelection === computerSelection:
            result = `It's a tie! Both players selected ${playerSelection}`;
            break;

        // Player Wins
        case (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper'):
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
            break;

        // Player Loses as default case
        default:
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    return result;
}

// Testing script for playRound function
//const playerSelection = 'rOcK';
//const computerSelection = getComputerChoice();
//console.log('Computer Selection: ' + computerSelection);
//console.log('Player Selection: ' + playerSelection);
//console.log(playRound(playerSelection,computerSelection));
