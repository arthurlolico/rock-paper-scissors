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

function game(humanChoice, computerChoice) {
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

function playRound() {

    let playerCont = 0;
    let computerCont = 0;
    let flag = 0;

    const buttons = document.querySelectorAll("button");
    const div = document.querySelector("div");

    const resultText = document.createElement("p");
    const resultScore = document.createElement("h3");
    div.appendChild(resultText);
    div.appendChild(resultScore);
    
    
    buttons.forEach((button) => {
        button.addEventListener("click",() => {
            let computerChoice = getComputerChoice();
            let result = game(button.id,computerChoice);
            console.log(result);
            if(flag === 0) {
                if(result === 2)
                    resultText.textContent = "Draw!"
                else if(result === 1) {
                    resultText.textContent = "You win! " + button.id + " beats " + computerChoice;
                    playerCont++;
                }
                else {
                    resultText.textContent = "You lose! " + button.id + " loses to " + computerChoice;
                    computerCont++;
                }
                resultScore.textContent = "Player: " + playerCont + "     Computer: " + computerCont;
                if(playerCont >= 5) {
                    resultScore.textContent = "Congratulations! You win! :D";
                    flag = 1;
                }
                else if(computerCont >= 5) {
                    resultScore.textContent = "You lost! Better luck next time. ;-;";
                    flag = 1;
                }
            }
        })
    })
}

function playGame(){
    playRound();
}

playGame();