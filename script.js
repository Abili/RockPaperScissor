function getComputerChoice() {
  const randoms = ["rock", "paper", "scissors"];
  const result = Math.floor(Math.random() * randoms.length);
  return randoms[result];
}

function playRound(playerSelection, computerSelection) {
  const screen = document.querySelector('.screen');
  if (playerSelection === computerSelection) {
      return "It's a draw.";
  } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
  ) {
      return `You win! "${playerSelection}" beats "${computerSelection}"`;
  } else {
      return `You lose! "${computerSelection}" beats "${playerSelection}"`;
  }
}

let playerScore = 0;
let computerScore = 0;

function game(playerSelection) {
  let result;
  const scoreDisplay = document.querySelector('#score');
  const screenDisplay = document.querySelector('#screen');

  const computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);

  if (result.includes("You win")) {
      playerScore = playerScore + 1;
  } else if (result.includes("You lose")) {
      computerScore = computerScore+ 1;
  }

  scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore >= 5) {
      screenDisplay.textContent = "Congratulations! You win the game!";
      disableButtons();
  } else if (computerScore >= 5) {
      screenDisplay.textContent = "Game over! You lose!";
      disableButtons();
  } else {
      screenDisplay.textContent = result;
  }
}

function disableButtons() {
  const btns = document.querySelectorAll('button');
  btns.forEach(btn => btn.removeEventListener('click', handleClick));
}

function handleClick(event) {
  const playerSelection = event.target.textContent.toLowerCase();
  game(playerSelection);
  createImage(playerSelection)
}


function createImage(playerSelection){
  const img = document.createElement('img')
  const res = document.querySelector('.btns')
  const body = document.querySelector('body');

 // Remove any previously created image element, if exists
 const previousImage = body.querySelector('img');
 if (previousImage) {
   body.removeChild(previousImage);
 }


if(playerSelection==='rock'){
  img.src ="./images/rock.png";
  
}
else if(playerSelection ==='paper'){
  img.src ="./images/paper.png";
}
else{
  img.src ="./images/scissor.png";

}

  img.style.width = '150px';
  img.style.height = '150px';
  img.style.marginTop = '20px';

  body.insertBefore(img, res); 
 
}

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', handleClick));
