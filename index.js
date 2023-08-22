const choices = ["rock", "paper", "scissors"]

function game() {
    playround();
}

// play the game 
// play five rounds 
// console based 

function playround() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();

}

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

}




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

game();
