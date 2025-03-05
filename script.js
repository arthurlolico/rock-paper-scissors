function getComputerChoice(choice) {
    let computerChoice = "Dummy";
    let randomNumber = 0;

    if(choice === 0){
        randomNumber = Math.floor(Math.random()*3 +1);
    }
    else{
        randomNumber = choice;
    }


    if(randomNumber === 1){
        computerChoice = "Rock";
    }
    else if(randomNumber === 2) {
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }
    
    return computerChoice;
}

function mainGame(computerChoice,humanChoice) {
    if (humanChoice === computerChoice)
        return 2;
    else {
        if(humanChoice === "Rock"){
            if(computerChoice === "Paper")
                return 0;
            else 
                return 1;
        }
        else if(humanChoice === "Paper"){
            if(computerChoice === "Rock")
                return 1;
            else
                return 0;
        }
        else {
            if(computerChoice === "Rock")
                return 0;
            else {
                return 1;
            }
        }
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Make your choice.\n1.Rock\n2.Paper\n3.Scissors");
    if(humanChoice < 1 || humanChoice > 3)
        console.log("Invalid choice.");
    else {
        let computerChoice = getComputerChoice(0);
        let humanChoice2 = getComputerChoice(parseInt(humanChoice));
        let result = mainGame(computerChoice,humanChoice2);
        if(result == 2)
            console.log("Draw! Play again.");
        else if (result == 1)
            console.log("You chose " + humanChoice2 + " and the PC chose " + computerChoice + ". WIN! o/");
        else
            console.log("You chose " + humanChoice2 + " and the PC chose " + computerChoice + ". LOSE... T-T");
    }
}

getHumanChoice();

//console.log(getComputerChoice());