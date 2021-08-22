function computerPlay() {
    let n = Math.random()

    if(n > 0.66)
        return "Rock"
    else if(n > 0.33)
        return "Scissors"
    else
        return "Paper"
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase();

    if((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) 
        return "You win! " + playerSelection + " beats " + computerSelection + "!"
    else if(playerSelection == computerSelection)
        return "It's a tie"
    else
        return "You lose! " + computerSelection + " beats " + playerSelection + "!"
   
}

function game() {
    for(let i = 0; i < 5; i++) {
        let player = prompt("What's your move?")
        console.log("Player chose: " + player)
        let comp = computerPlay()
        console.log("Computer chose: " + comp)
        console.log(playRound(player, comp))
    }
}

game()