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
    let result;
    switch (true) {
        // Tie
        case playerSelection === computerSelection:
            result = 'tie';
            break;

        // Player Wins
        case (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper'):
            result = 'win';
            break;

        // Player Loses as default case
        default:
            result = 'loss';
    }
    return result;
}

// Function to play a game of 5 RPS rounds
function game() {
    let playerScore = 0,
        computerScore = 0,
        playerSelection,
        computerSelection,
        result,
        gameResult;
        
    for (let i = 1; i < 6; i++) {
        playerSelection = getPlayerChoice();    
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result === 'tie') {
            console.log(`Round ${i}: It's a tie! Both players selected ${playerSelection}.`);
            console.log(`Player to Computer Score: ${playerScore}-${computerScore}`);
        } else if (result === 'win') {
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

// Function to prompt player to make a valid case insensitive selection of rock, paper, or scissors
function getPlayerChoice() {
    let playerChoice = prompt("What's your choice? Rock, Paper, or Scissors?");
    
    // First character of string should be uppercase, all other characters should be lowercase
    playerChoice = (playerChoice.slice(0,1)).toUpperCase() + (playerChoice.slice(1)).toLowerCase();
    
    // Checks if player made a valid selection.  If invalid, the player is prompted to make a selection again until valid.
    if (playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice === 'Scissors') {
        return playerChoice;
    } else {
        console.log('Invalid selection.  Choose Rock, Paper, or Scissors.')
        playerChoice = getPlayerChoice();
        return playerChoice;    
    }   
}

console.log(game());