// rock paper scissors game //

// function playerSelection() //
const playerAnswer = prompt ("Rock, paper, or scissors? Choose wisely")

console.log (playerAnswer)

function computerSelection() {   
    const cSelection = ["rock", "paper", "scissors"]; 
    let randomItem = cSelection[Math.floor(Math.random()*cSelection.length)];{
    return randomItem;
    }
}   

console.log (computerSelection())

function playRound(playerAnswer, computerSelection) {
    if playerAnswer === computerSelection {"Great minds hink alike"
    }   else if (playerAnswer === "rock") && (computerSelection === "scissors") {
        "You win! Rock smashes scissors";
    }   else if (playerAnswer === "rock") && (computerSelection === "paper") {
        "You lose! Paper smothers rock";
    }   else if (playerAnswer === "paper") && (computerSelection === "scissors") {
        "You lose! Scissors cuts paper";
    }   else if (playerAnswer === "paper") && (computerSelection === "rock") {
        "You win! Paper smothers rock";
    }   else if (playerAnswer === "scissors") && (computerSelection === "paper") {
        "You Win! Scissors cuts paper";
    }   else (playerAnswer === "scissors") && (computerSelection === "rock") {
        "You lose! Rock smashes scissors";
    }
}

console.log (playRound);
// loop game 5x and keep score
 