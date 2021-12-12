// rock paper scissors game //
for (i=0; i<=5; i++) {
    
    function getPlayerInput() {
        let playerInput = prompt ("Rock, paper, or scissors? Choose wisely").toLowerCase();
        return playerInput;
    }    

    let playerAnswer = getPlayerInput()

    console.log (playerAnswer)

    function computerSelection() {   
        const cSelection = ["rock", "paper", "scissors"]; 
        let randomItem = cSelection[Math.floor(Math.random()*cSelection.length)];{
        return randomItem;
        }
    }   

    let computerAnswer = computerSelection();

    console.log (computerAnswer);

    function playRound(playerAnswer, computerAnswer) {
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

    let round = playRound(playerAnswer, computerAnswer)
    console.log (round);

    function getScore(addScore) {
        switch (round){
            case "You win! Rock smashes scissors":
                //fall through//
            case "You win! Paper smothers rock":
                //fall through//
            case "You Win! Scissors cuts paper":
                return 1;
                break;
            case "You lose! Rock smashes scissors":
                //fall through//
            case "You lose! Paper smothers rock":
                //fall through//
            case "You lose! Scissors cuts paper":
                //fall through//
            case "Great minds think alike": 
                return 0;  
                break;    
        }
    }

    console.log (getScore());
}


//console.log (getScore())