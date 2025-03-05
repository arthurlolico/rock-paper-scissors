function getComputerChoice() {
  
    let computerChoice = "Dummy";
    randomNumber = Math.floor(Math.random()*3 +1);

    if(randomNumber === 1)
        computerChoice = "rock";
    else if(randomNumber === 2)
        computerChoice = "paper";
    else
        computerChoice = "scissors";

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
        return 2;
    else {
        if(humanChoice === "rock"){
            if(computerChoice === "paper")
                return 0;
            else 
                return 1;
        }
        else if(humanChoice === "paper"){
            if(computerChoice === "rock")
                return 1;
            else
                return 0;
        }
        else {
            if(computerChoice === "rock")
                return 0;
            else {
                return 1;
            }
        }
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Make your choice.\nRock\nPaper\nScissors");
    if(humanChoice < 1 || humanChoice > 3)
        console.log("Invalid choice.");
    else {
        return humanChoice;
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let i = 0;

    while(i < 5){

        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice();

        let result = playRound(humanChoice,computerChoice);

        if(result == 2)
            console.log("Draw!");
        else if (result == 1){
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else{
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        i++;
    }
    if(humanScore === computerScore)
        console.log("This match ends in a draw. :|");
    else if(humanScore > computerScore)
        console.log("Congratulations! You won the game! :D");
    else
        console.log("You lost! Try again! :(");
}

playGame();