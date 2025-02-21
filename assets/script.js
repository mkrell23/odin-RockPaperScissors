function getComputerChoice() {
    let randomNumber = (Math.random() * 100 );
    if (randomNumber < 33) {
        return "rock";
    }
    else if (randomNumber < 66 ) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please pick rock, paper, or scissors.").toLowerCase();
    return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let playedRounds = 0;
    
    function playRound(){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        switch (humanChoice) {
            case "rock":
                
                switch (computerChoice) {
                    case "rock":
                        console.log("Tie! Try again.");
                        break;
                    
                    case "paper":
                        console.log("Paper covers rock!");
                        computerScore +=1;
                        break;
    
                    case "scissors":
                        console.log("Rock breaks scissors!");
                        humanScore +=1;
                        break;
                }
    
                break;
    
            case "paper":
    
                switch (computerChoice) {
                    case "rock":
                        console.log("Paper covers rock!");
                        humanScore +=1;
                        break;
                    
                    case "paper":
                        console.log("Tie! Try again.");
                        break;
    
                    case "scissors":
                        console.log("Scissors cut paper!");
                        computerScore +=1;
                        break;
    
                    default:
                        break;
                }
            
                break;
    
            case "scissors":
    
                switch (computerChoice) {
                    case "rock":
                        console.log("Rock breaks scissors!");
                        computerScore +=1;
                        break;
                    
                    case "paper":
                        console.log("Scissors cut paper!");
                        humanScore +=1;
                        break;
    
                    case "scissors":
                        console.log("Tie! Try again.");
                        break;
    
                    default:
                        break;
                }
            
                break;
    
            default:
                    console.log("Invalid Choice! Pick again!");
                    break;
        }
    } 

    while (playedRounds <= 5) {
        playRound()
        playedRounds += 1;
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("You lose!");
    } else {
        console.log("You tie!");
    }
}

playGame();