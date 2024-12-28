// EMPTY VARIABLES
let getHumanChoice = '';
let humanScore = 0;
let computerScore = 0;

// SELECTORS
const playAgainBtn = document.querySelector('#play-again-button');
const endGameBtn = document.querySelector('#end-game-button');
let modalText = document.querySelector('.modalText');
let modal = document.querySelector('#popup');
const buttons = document.querySelector('#buttons');
let score = document.querySelector('#score');

// PLAY ROUND LOGIC
function playRound (humanChoice, computerChoice) {

    let roundInfo = document.querySelector('#roundInfo');

    // COMPUTER PICK
    let getComputerChoice = Math.floor((Math.random() * 3) + 1);
    let computerResult = " ";
    

    if (getComputerChoice === 1) {
        computerResult = "rock";
    } else if (getComputerChoice === 2) {
        computerResult = "paper";   
    } else {
        computerResult = "scissors";
    }

    if (humanChoice === "rock" && computerResult == "scissors") {
        roundInfo.textContent = "You win! Rock beats scissors.";
        humanScore++;
    } else if (humanChoice === "rock" && computerResult == "paper") {
        roundInfo.textContent = "You lost! Paper beats rock.";
        computerScore++;
    } else if (humanChoice === "paper" && computerResult == "rock") {
        roundInfo.textContent = "You win! Paper beats rock.";
        humanScore++;
    } else if (humanChoice === "paper" && computerResult == "scissors") {
        roundInfo.textContent = "You lost! Scissors beat paper.";
        computerScore++;
    } else if (humanChoice === "scissors" && computerResult == "rock") {
        roundInfo.textContent = "You lost! Rock beats scissors.";
        computerScore++;
    } else if (humanChoice === "scissors" && computerResult == "paper") {
        roundInfo.textContent = "You win! Scissors beat paper.";
        humanScore++;
    } else {
        roundInfo.textContent = "It's a draw!";
    }
    
// COMPUTER SINGS
let computerSign = '';
if (computerResult === 'rock'){
    computerSign = '✊';
} else if (computerResult === 'paper'){
    computerSign = '✋';
} else if (computerResult === 'scissors'){
    computerSign = '✌️';
}

// WINNER ANNOUNCEMENT
    if (humanScore === 5 || computerScore === 5){
        if (humanScore === 5){
            modalText.textContent = 'You win! Do you want to play another game?';
            modal.style.display = 'flex';
            toggleButtons(false);
        } else if (computerScore === 5){
            modalText.textContent = 'Computer wins! Do you want to play another game?';
            modal.style.display = 'flex';
            toggleButtons(false);
        }}

// DOM DIVS THAT DISPLAY COMPUTER PICK AND RESULT
    let computerPick = document.querySelector('#computerPick');
    computerPick.textContent = computerSign + computerResult.charAt(0).toUpperCase() + computerResult.slice(1);
    let computerPickText = document.querySelector('#computerPickText');
    let result = document.querySelector('#result');
    result.innerText =  'You: \xA0\xA0' + humanScore +  
                        '\nPC:\xA0\xA0\xA0\xA0 ' + computerScore;

    computerPick.style.display = 'block';
    computerPick.style.fontSize = '50px';
    computerPick.style.color = '#2521f3';
    computerPickText.style.display = 'block';
}
 
// TOGGLE BUTTONS OPTION IF PLAYER DECLINES NEW MATCH
function toggleButtons (state) {
    rock.disabled = !state;
    paper.disabled = !state;
    scissors.disabled = !state;
}
// SELECTING EACH BUTTON FOR PLAYER CHOICE  rock paper & scissors
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound("rock");
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound("paper");
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound("scissors");
})

// PLAY AGAIN BUTTON AND NEW GAME FUNCTION
playAgainBtn.addEventListener('click', () => {
    newGame();
})

function newGame(){
    humanScore = 0;
    computerScore = 0;
    result.innerText =  'You: \xA0\xA00'+  
    '\nPC: \xA0\xA0\xA0\xA00';
    roundInfo.textContent = "New game begins!";
    modal.style.display = 'none';
    toggleButtons(true);
    computerPick.style.display = 'none';
    computerPickText.style.display = 'none';
}

// END GAME BUTTON AND END GAME FUNCTION
endGameBtn.addEventListener('click', () => {
    endGame();
})

function endGame() {
    roundInfo.textContent = "Thanks for playing!";
    modal.style.display = 'none';
    result.textContent = '';
    computerPick.textContent = '';
    buttons.style.display = 'none';
    score.style.display = 'none';
    computerPickText.style.display = 'none';
    }