function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)]
}

function capitalise(selection) {
  return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase()
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalise(playerSelection)
  computerSelection = capitalise(computerSelection)

  if (playerSelection === computerSelection) {
    playerScore += 0.5
    return `Draw! You both selected ${playerSelection}`
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerScore += 1
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You lose! ${playerSelection} loses ${computerSelection}`
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice()
    let playerSelection = prompt('What is you choice... rock, paper or scissors?')

    console.log(playRound(playerSelection, computerSelection), playerScore)
  }

  let outcome
  let scoreline = playerScore + '-' + (5 - playerScore)

  if (playerScore > 2.5) {
    outcome = 'Well done... you win!'
  } else if (playerScore === 2.5) {
    outcome = 'Drawn game!'
  } else {
    outcome = 'Unlucky punk... you lost!'
  }

  console.log(`${outcome} ${scoreline}`)
}

let playerScore = 0

console.log(game())