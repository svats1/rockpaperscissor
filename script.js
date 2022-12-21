function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"]
    const value = Math.floor((Math.random()*3)+1)
    return choices[value-1]
}


function playRound(playerSelection){
    const computerChoice = getComputerChoice()
    if (playerSelection == "rock"){
        if (computerChoice == playerSelection){
            return `You: ${playerSelection} Computer ${computerChoice} - It's a Tie!`
        }
        else if (computerChoice == "scissor") {
            return `You: ${playerSelection} Computer ${computerChoice} - You win!`
        }
        else {
            return `You: ${playerSelection} Computer ${computerChoice} - You lose.`
        }
    }
    else if (playerSelection == "paper"){
        if (computerChoice == playerSelection){
            return `You: ${playerSelection} Computer ${computerChoice} - It's a Tie!`
        }
        else if (computerChoice == "rock") {
            return `You: ${playerSelection} Computer ${computerChoice} - You win!`
        }
        else {
            return `You: ${playerSelection} Computer ${computerChoice} - You lose.`
        }
    }
    else if (playerSelection == "scissor"){
        if (computerChoice == playerSelection){
            return `You: ${playerSelection} Computer ${computerChoice} - It's a Tie!`
        }
        else if (computerChoice == "paper") {
            return `You: ${playerSelection} Computer ${computerChoice} - You win!`
        }
        else {
            return `You: ${playerSelection} Computer ${computerChoice} - You lose.`
        }
    }
    else {
        alert("Improper value")
    }
}

function game () {
    for (let i=0; i<5; ++i){
        const playerSelection = prompt().toLowerCase()
        console.log(playRound(playerSelection))
    }
}

game()

