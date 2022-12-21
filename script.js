function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"]
    const value = Math.floor((Math.random()*3)+1)
    console.log(choices[value-1])
}
getComputerChoice()