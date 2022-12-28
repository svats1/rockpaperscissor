// Initialize scores
let playerScore = 0
let computerScore = 0

// Show descriptive message
const message = document.querySelector('.message')

// Show turns
const turn = document.querySelector('.turn')

// Create common event listener for all buttons
const playBtn = document.querySelectorAll('button')
playBtn.forEach(item => item.addEventListener('click', (e) => {
    playRound(e.target.className)
}))

// Update score
function updateScore() {
    const score = document.querySelector('.score')
    score.textContent = `Player : ${playerScore} Computer : ${computerScore}`
}
// Initialize scores
updateScore()

// Funtion to create random computer choice
function getComputerChoice(){
    let choices = []
    playBtn.forEach(item => choices.push(item.className))
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

// What happens when someone gets to 5 wins
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
    turn.textContent = `Player chose ${playerSelection}, Computer chose ${computerChoice}`

    if (playerSelection == "Rock"){
        if (computerChoice == playerSelection){
            tie()
            updateScore()
        }
        else if (computerChoice == "Scissor") {
            playerWins()
            updateScore()
        }
        else {
            computerWins()
            updateScore()
        }
    }
    else if (playerSelection == "Paper"){
        if (computerChoice == playerSelection){
            tie()
            updateScore()
        }
        else if (computerChoice == "Rock") {
            playerWins()
            updateScore()
        }
        else {
            computerWins()
            updateScore()
        }
    }
    else if (playerSelection == "Scissor"){
        if (computerChoice == playerSelection){
            tie()
            updateScore()
        }
        else if (computerChoice == "Paper") {
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