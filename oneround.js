let getComputerChoice = Math.floor((Math.random() * 3) + 1);
let computerResult = " ";

if (getComputerChoice === 1) {
    computerResult = "rock";
    console.log(computerResult);
} else if (getComputerChoice === 2) {
    computerResult = "paper";
    console.log(computerResult);
} else {
    computerResult = "scissors";
    console.log(computerResult);
}

let getHumanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
if (getHumanChoice != "rock" && getHumanChoice !== "paper" && getHumanChoice !== "scissors") {
    alert("Invalid input")
}

let humanScore = 0;
let computerScore = 0;
function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerResult == "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice === "rock" && computerResult == "paper") {
            console.log("You lost! Paper beats rock.");
            computerScore++;
    } else if (humanChoice === "paper" && computerResult == "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice === "paper" && computerResult == "scissors") {
        console.log("You lost! Scissors beat paper.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerResult == "rock") {
        console.log("You lost! Rock beats scissors.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerResult == "paper") {
        console.log("You win! Scissors beat paper.");
        humanScore++;
    } else {
        console.log("It's a draw!");
    }
}

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

playRound(humanSelection, computerSelection);
console.log("Human score : " + humanScore);
console.log("Computer score : " + computerScore);