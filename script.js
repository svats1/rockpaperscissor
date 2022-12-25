function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"]
    const index = Math.floor((Math.random()*3))
    return (choices[index])
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection){
    const computerChoice = getComputerChoice()
    if (playerSelection == "rock"){
        if (computerChoice == playerSelection){
            console.log(`You: ${playerSelection} Computer ${computerChoice} - It's a Tie!`)
            console.log("Player Score is "  + playerScore)
            console.log("Computer Score is " + computerScore)
        }
        else if (computerChoice == "scissor") {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You win!`)
            playerScore += 1
            console.log("Player Score is "  + playerScore)
            console.log("Computer Score is " + computerScore)
        }
        else {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You lose.`)
            computerScore += 1
            console.log("Player Score is "  + playerScore)
            console.log("Computer Score is " + computerScore)
        }
    }
    else if (playerSelection == "paper"){
        if (computerChoice == playerSelection){
            console.log(`You: ${playerSelection} Computer ${computerChoice} - It's a Tie!`)
            console.log("Player Score is "  + playerScore)
            console.log("Computer Score is " + computerScore)
        }
        else if (computerChoice == "rock") {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You win!`)
            playerScore += 1
            console.log("Player Score is "  + playerScore)
            console.log("Computer Score is " + computerScore)
        }
        else {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You lose.`)
            computerScore += 1
            console.log("Player Score is "  + playerScore)
            console.log("Computer Score is " + computerScore)
        }
    }
    else if (playerSelection == "scissor"){
        if (computerChoice == playerSelection){
            console.log(`You: ${playerSelection} Computer ${computerChoice} - It's a Tie!`)
            console.log("Player Score is "  + playerScore)
            console.log("Computer Score is " + computerScore)
        }
        else if (computerChoice == "paper") {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You win!`)
            playerScore += 1
            console.log("Player Score is "  + playerScore)
            console.log("Computer Score is " + computerScore)
        }
        else {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You lose.`)
            computerScore += 1
            console.log("Player Score is "  + playerScore)
            console.log("Computer Score is " + computerScore)
        }
    }
    else {
        alert("Improper value")
    }
}

// if (playerScore || computerScore >5 ) {
//     console.log('GAME OVER')
//     console.log("Player Score is "  + playerScore)
//     console.log("Computer Score is " + computerScore)
// }

const choices = document.querySelector('.choices')

const rock = document.createElement('button')
rock.className = "rockBtn"
rock.innerText = "ROCK"
rock.addEventListener('click', () => playRound("rock"))
choices.appendChild(rock)

const paper = document.createElement('button')
paper.className = "paperBtn"
paper.innerText = "PAPER"
paper.addEventListener('click', () => playRound("paper"))
choices.appendChild(paper)

const scissor = document.createElement('button')
scissor.className = "scissorBtn"
scissor.innerText = "SCISSOR"
scissor.addEventListener('click', () => playRound("scissor"))
choices.appendChild(scissor)

console.log("Player Score is "  + playerScore)
console.log("Computer Score is " + computerScore)
