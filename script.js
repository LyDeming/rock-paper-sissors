// rock paper scissors game //

let playerAnswer = prompt ("Rock, paper, or scissors? Choose wisely").toLowerCase();

console.log (playerAnswer);

function computerSelection() {   
    const cSelection = ["rock", "paper", "scissors"]; 
    let randomItem = cSelection[Math.floor(Math.random()*cSelection.length)];{
    return randomItem;
    }
}   

let computerAnswer = computerSelection();

console.log (computerAnswer);

function playRound() {
    if (playerAnswer === computerAnswer) {
        return "Great minds think alike";
    }  else if (playerAnswer === "rock" && computerAnswer === "scissors") {
        return "You win! Rock smashes scissors";
    }  else if (playerAnswer === "rock" && computerAnswer === "paper") {
        return "You lose! Paper smothers rock";
    }  else if (playerAnswer === "paper" && computerAnswer === "scissors") {
        return "You lose! Scissors cuts paper";
    }  else if (playerAnswer === "paper" && computerAnswer === "rock") {
        return "You win! Paper smothers rock";
    }  else if (playerAnswer === "scissors" && computerAnswer === "paper") {
        return "You Win! Scissors cuts paper";
    }  else (playerAnswer === "scissors" && computerAnswer === "rock") 
        return "You lose! Rock smashes scissors"; 
}

console.log (playRound());

// loop game 5x and keep score
 