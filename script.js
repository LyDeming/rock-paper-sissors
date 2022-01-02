// rock paper scissors game //
const playerDisplay = document.getElementById('playerSelection');
const computerDisplay = document.getElementById('computerSelection');
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('.choices');
let playerAnswer
let computerChoice
let result

choices.forEach(choice => choice.addEventListener('click', (e) => {
    playerAnswer = e.target.id 
    playerDisplay.innerHTML = playerAnswer
    computerSelection()
    playRound()
}))
    
function computerSelection() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "scissors"
    }

    computerDisplay.innerHTML = computerChoice  
}

function playRound() {
    if (playerAnswer === computerChoice) {
        result = "Great minds think alike! It's a draw.";
    }
    if (playerAnswer === "rock" && computerChoice === "scissors") {
        result = "You win! Rock smashes scissors.";
    }
    if (playerAnswer === "rock" && computerChoice === "paper") {
        result = "You lose! Paper smothers rock.";
    }
    if (playerAnswer === "paper" && computerChoice=== "scissors") {
        result = "You lose! Scissors cuts paper.";
    }
    if (playerAnswer === "paper" && computerChoice === "rock") {
        result = "You win! Paper smothers rock.";
    }
    if (playerAnswer === "scissors" && computerChoice === "paper") {
        result = "You Win! Scissors cuts paper.";
    }
    if (playerAnswer === "scissors" && computerChoice === "rock")
    result = "You lose! Rock smashes scissors.";
    
    resultDisplay.innerHTML = result
}

/*let round = playRound(playerAnswer, computerAnswer)
console.log(round);

function getScore(addScore) {
    switch (round) {
        case "You win! Rock smashes scissors":
        //fall through//
        case "You win! Paper smothers rock":
        //fall through//
        case "You Win! Scissors cuts paper":
            result = 1;
            break;
        case "You lose! Rock smashes scissors":
        //fall through//
        case "You lose! Paper smothers rock":
        //fall through//
        case "You lose! Scissors cuts paper":
        //fall through//
        case "Great minds think alike":
            result = 0;
            break;
    }
}

console.log(getScore());


//console.log (getScore())*/
