let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"]
    const index = Math.floor((Math.random()*3))
    return (choices[index])
}

function logScore() {
    console.log("Player Score is "  + playerScore)
    console.log("Computer Score is " + computerScore)
}
function playRound(playerSelection){
    const computerChoice = getComputerChoice()
    if (playerSelection == "rock"){
        if (computerChoice == playerSelection){
            console.log(`You: ${playerSelection} Computer ${computerChoice} - It's a Tie!`)
            logScore()
        }
        else if (computerChoice == "scissor") {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You win!`)
            playerScore += 1
            logScore()
        }
        else {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You lose.`)
            computerScore += 1
            logScore()
        }
    }
    else if (playerSelection == "paper"){
        if (computerChoice == playerSelection){
            console.log(`You: ${playerSelection} Computer ${computerChoice} - It's a Tie!`)
            logScore()
        }
        else if (computerChoice == "rock") {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You win!`)
            playerScore += 1
            logScore()
        }
        else {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You lose.`)
            computerScore += 1
            logScore()
        }
    }
    else if (playerSelection == "scissor"){
        if (computerChoice == playerSelection){
            console.log(`You: ${playerSelection} Computer ${computerChoice} - It's a Tie!`)
            logScore()
        }
        else if (computerChoice == "paper") {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You win!`)
            playerScore += 1
            logScore()
        }
        else {
            console.log(`You: ${playerSelection} Computer ${computerChoice} - You lose.`)
            computerScore += 1
            logScore()
        }
    }
    if (!(playerScore < 5 && computerScore < 5)) {
        if (alert('GAME OVER')){}
        else window.location.reload()
    }
}

// Grab div to hold all buttons
const choices = document.querySelector('.choices')

// Create Rock element
const rock = document.createElement('button')
rock.className = "rockBtn"
rock.innerText = "ROCK"
rock.addEventListener('click', () => playRound("rock"))
choices.appendChild(rock)

// Create Paper element
const paper = document.createElement('button')
paper.className = "paperBtn"
paper.innerText = "PAPER"
paper.addEventListener('click', () => playRound("paper"))
choices.appendChild(paper)

// Create Scissor element
const scissor = document.createElement('button')
scissor.className = "scissorBtn"
scissor.innerText = "SCISSOR"
scissor.addEventListener('click', () => playRound("scissor"))
choices.appendChild(scissor)