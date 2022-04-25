let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let n = Math.random();

    if(n > 0.66)
        return "Rock";
    else if(n > 0.33)
        return "Scissors";
    else
        return "Paper";
}

function updateScore() {
    const score = document.getElementById('score');
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

    if (playerScore == 5 || computerScore == 5) {
        result.textContent = playerScore == 5 ? "Player " : "Computer ";
        result.textContent += "wins the game!"
        stopPlay();
    }
}

function stopPlay() {
    document.querySelectorAll('button').forEach((btn) => {
        btn.disabled = true;
    });

    const resetBtn = document.createElement('button');
    resetBtn.id = "reset";
    resetBtn.textContent = "Reset";
    const body = document.body;
    body.appendChild(resetBtn);

    resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
    const score = document.getElementById('score');
    score.textContent = `Player: 0 Computer: 0`;
    
    const result = document.getElementById('result');
    result.textContent = "Choose your move!";

    playerScore = computerScore = 0;
    
    document.querySelectorAll('button').forEach((btn) => {
        btn.disabled = false;
    });

    const resetBtn = document.getElementById('reset');
    document.body.removeChild(resetBtn);
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    const result = document.getElementById('result');

    if((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        result.textContent = "You win! ";
        playerScore++;
    }
    else if(playerSelection == computerSelection) {
        result.textContent = "It's a tie! ";
    }
    else {
        result.textContent =  "You lose! ";
        computerScore++;
    }

    result.textContent += `Computer chose ${computerSelection}!`;
    
    updateScore();
}

function game() {
    document.querySelectorAll('button').forEach((btn) => {
        btn.disabled = false;
        btn.addEventListener('click', function playListener(){
            playRound(btn.id);
        })
    });
}

game();