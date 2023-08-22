const choices = ["rock", "paper", "scissors"]
const winners = []
function game() {
    for (let i = 0; i <= 4; i++) {
        playround();
    }
    logWins();
}

// play the game 
// play five rounds 
// console based 

function playround() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner)
    console.log(playerSelection)
    console.log(computerSelection)
    console.log(winner)

}

//PLAYER CHOICE CODE//
function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('You cant just leave... Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Spell it correctly capitalisation doesnt matter');
        while (input == null) {
            input = prompt('You cant just leave... Type Rock, Paper, or Scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}



//COMPUTER CHOICE CODE//
function computerChoice() {
    //Get input from computer
    return choices[Math.floor(Math.random() * choices.length)]

}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    }
    else {
        return false;
    }
}
//RESULTS OF ROUND CODE//
function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie';
    } else if (
        (choiceP === 'rock' && choiceC === 'scissors') ||
        (choiceP === 'paper' && choiceC === 'rock') ||
        (choiceP === 'scissors' && choiceC === 'paper')) {
        return 'Player'
    } else {
        return 'Computer'
    }
}

//Scoreboard Code//
function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:');
    console.log('Player Wins', playerWins);
    console.log('Computer Wins', computerWins);
    console.log('ties', ties);

}

game();
