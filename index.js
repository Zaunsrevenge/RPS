const choices = ["rock", "paper", "scissors"]
const winners = []
function game() {
    for (let i = 1; i <= 5; i++) {
        playround(i);
    }
    document.querySelector('button').textContent = 'Play again!';
    logWins();
    winnerDeclare();
}

// play the game 
// play five rounds 
// console based 

function playround(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner)
    logRound(playerSelection, computerSelection, winner, round);

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

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round', round);
    console.log('Player Chose', playerChoice);
    console.log('Computer Chose', computerChoice);
    console.log(winner, 'Won the round');
    console.log('---------------------------')
}

function winnerDeclare() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    if (playerWins > computerWins) {
        console.log('NICE JOB YOU WON');
    } else if (computerWins > playerWins) {
        console.log('BOO YOU SUCK')
    } else (console.log('meh boring... play again'))
}
game();
