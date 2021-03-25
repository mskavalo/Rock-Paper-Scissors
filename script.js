let playerScore = 0;
let predatorScore = 0;
const playerScore_div = document.getElementById('playerScore');
const predatorScore_div = document.getElementById('predatorScore');
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissor_div = document.getElementById('scissors');
const action_div = document.querySelector('.action > h2');
const restart = document.getElementById('restart');

// computerchoice
function computerPlay() {
  const random = ['rock', 'paper', 'scissors'];
  let randomchoice = Math.floor(Math.random() * 3);
  return random[randomchoice];
}

// win game
function win() {
  playerScore++;
}

//playRound
function game(playerSelection) {
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    action_div.innerHTML = "It\'s a Draw!";
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      predatorScore++;
      action_div.innerHTML = "predator wins, paper covers rock";
    } else {
      playerScore++;
      action_div.innerHTML = "You win, rock crushes scissors";
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      predatorScore++;
      action_div.innerHTML = "predator wins, scissors cuts paper";
    } else {
      playerScore++;
      action_div.innerHTML = " you win, paper beats rock";
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      predatorScore++;
      action_div.innerHTML = "predator wins, rock beats scissors";
    }
    else {
      playerScore++;
      action_div.innerHTML = " you win, paper beats rock";
    }
  }
  //keep gamescores to 5
  playerScore_div.innerHTML = playerScore;
  predatorScore_div.innerHTML = predatorScore;
  if (playerScore === 5) {
    result_div.innerHTML = "Congratulations you win, man gets to live!";
  } else if (predatorScore === 5) {
    result_div.innerHTML = "You Lose, this is the end of all mankind!";
  }
}

//restartGame
function restartGame() {
  playerScore = 0;
  predatorScore = 0;
  playerScore_div.innerHTML = playerScore;
  predatorScore_div.innerHTML = predatorScore;
  result_div.innerHTML = "";
}

//event listeners
function main() {
  rock_div.addEventListener('click', function () {
    if (playerScore >= 5 || predatorScore >= 5) {
      return;
    }
    game('rock');
  })
  paper_div.addEventListener('click', function () {
    if (playerScore >= 5 || predatorScore >= 5) {
      return;
    }
    game('paper');
  })
  scissor_div.addEventListener('click', function () {
    if (playerScore >= 5 || predatorScore >= 5) {
      return;
    }
    game('scissors');
  })
  restart.addEventListener('click', restartGame);
}
main();
