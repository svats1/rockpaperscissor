// Initialize scores
let playerScore = 0
let computerScore = 0

// div for all buttons
const choices = document.querySelector('.choices')

// Show score
const score = document.querySelector('.score')

// Show descriptive message
const message = document.querySelector('.message')

// Show turns
const turn = document.querySelector('.turn')
turn.textContent = 'press any button to start'

// Create one event listener for any button, fires game round with button class
const playBtn = document.querySelectorAll('button')
playBtn.forEach(item => item.addEventListener('click', (e) => {
    playRound(e.target.className)
}))

// Function to update scores after round
function updateScore() {
    score.textContent = 
    `player : ${playerScore} computer : ${computerScore}`
}
updateScore()

// Funtion to create random computer choice
function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"]
    const index = Math.floor((Math.random()*3))
    return (choices[index])
}

// What happens when player wins
function playerWins() {
    playerScore += 1
    message.textContent = "Player wins!"
}

// What happens when computer wins
function computerWins() {
    computerScore += 1
    message.textContent = "Computer wins."
}

// What happens on a tie
function tie() {
    message.textContent = "It's a tie!"
}

function gameOver() {
    updateScore()
    if (playerScore > computerScore) message.textContent = `Woohoo! You win the game!`
    else message.textContent = `Booo! Computer wins the game.`
    setTimeout(() => {
        if (alert("Restart game?")){}
        else window.location.reload()
    }, 100)
}

// Game logic
function playRound(playerSelection){
    const computerChoice = getComputerChoice()
    turn.textContent = `player picks ${playerSelection}, computer picks ${computerChoice}`

    if (playerSelection == "rock"){
        if (computerChoice == playerSelection){
            tie()
            updateScore()
        }
        else if (computerChoice == "scissor") {
            playerWins()
            updateScore()
        }
        else {
            computerWins()
            updateScore()
        }
    }
    else if (playerSelection == "paper"){
        if (computerChoice == playerSelection){
            tie()
            updateScore()
        }
        else if (computerChoice == "rock") {
            playerWins()
            updateScore()
        }
        else {
            computerWins()
            updateScore()
        }
    }
    else if (playerSelection == "scissor"){
        if (computerChoice == playerSelection){
            tie()
            updateScore()
        }
        else if (computerChoice == "paper") {
            playerWins()
            updateScore()
        }
        else {
            computerWins()
            updateScore()
        }
    }
    // Reset after either player wins 5 games
    if (!(playerScore < 5 && computerScore < 5)) {
        gameOver()
    }
}