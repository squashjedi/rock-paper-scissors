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
    return 0.5
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 1
  } else {
    return 0
  }
  roundStatus.textContent = round
  round += 1
}

function game() {
  let score = [0, 0]
  const buttons = document.querySelectorAll('button')
  const message = document.getElementById('message')
  const currentScore = document.getElementById('current-score')
  currentScore.textContent = `${score[0]} - ${score[1]}`

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let playerSelection = button.textContent
      let computerSelection = getComputerChoice()
      let result = playRound(playerSelection, computerSelection)
      if (result === 0.5) {
        score[0] += 0.5
        score[1] += 0.5
        message.textContent = `Draw! You both selected ${computerSelection}.`
      } else if (result === 1) {
        score[0] += 1
        message.textContent = `Won! ${playerSelection} beats ${computerSelection}.`
      } else {
        score[1] += 1
        message.textContent = `Lost! ${playerSelection} loses to ${computerSelection}.`
      }
      currentScore.textContent = `${score[0]} - ${score[1]}`
      if (score[0] >= 5 || score[1] >= 5) {
        if (score[0] >= 5) {
          message.textContent = `You won! ${score[0]} - ${score[1]}`
        } else {
          message.textContent = `You lost! ${score[0]} - ${score[1]}`
        }
        currentScore.textContent = ""
        buttons.forEach((button) => {
          button.style.display = "none"
        })
      }
    })
  })
}

game()