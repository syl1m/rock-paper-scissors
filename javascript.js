// Function to randomly return Rock, Paper, or Scissors
function getComputerChoice() {
    
    const x = Math.floor((Math.random()*3)); // Randomly generate an integer value of 0, 1, or 2
    
    // Assign computerChoice variable to string of 'Rock', 'Paper', or 'Scissors' based on randomly generated integer
    const computerChoice = (x === 0) ? 'Rock' : 
        (x === 1) ? 'Paper' : 'Scissors';
    return computerChoice;
}

console.log(getComputerChoice());