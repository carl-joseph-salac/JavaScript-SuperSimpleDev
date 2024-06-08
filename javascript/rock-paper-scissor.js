// If possible dont use global variable to avoid conflict

// get the score json from local storage then convert it back to object
// then store it to score variable
// used let to reassign a default value (zeros) if it is deleted from local storage
// used default operator to add a defaul value if the score is null
let score = JSON.parse(localStorage.getItem('score')) || 
{
  wins: 0,
  losses: 0,
  ties: 0
};

// always display the scores even when the page is reload
diplayResult();

// eventListeners
const rockBtn = document.querySelector('.js-rock-btn');
const paperBtn = document.querySelector('.js-paper-btn');
const scissorsBtn = document.querySelector('.js-scissors-btn');
const resetBtn = document.querySelector('.js-reset-btn');
const autoPlayBtn = document.querySelector('.js-auto-play-btn');

rockBtn.addEventListener('click', () =>  playGame('rock'));
paperBtn.addEventListener('click', () =>  playGame('paper'));
scissorsBtn.addEventListener('click', () =>  playGame('scissors'));
resetBtn.addEventListener('click', () =>  resetScore());
autoPlayBtn.addEventListener('click', () =>  autoPlay());
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r'){
    playGame('rock');
  } else if (event.key === 'p'){
    playGame('paper');
  } else if (event.key == 's'){
    playGame('scissors');
  } else if (event.key === 'Delete'){
    resetScore();
  } else if (event.key === 'Enter'){
    autoPlay();
  }
});

function computerMoves(){
  let computerMove = ''; // best practice to keep variable inside a scope
  const randomNumber = Math.random();      
  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
  }      
  return computerMove;
}

function playGame(move){ // avoid putting too many parameters
  const computerMove = computerMoves(); 
  let result = '';
  if (move === 'rock'){
    if (computerMove === 'rock'){
      result = 'Tie';
    } else if (computerMove === 'paper'){
      result = 'You lose';
    } else if (computerMove === 'scissors'){
      result = 'You win';
    }
  } else if (move === 'paper') {
    if (computerMove === 'rock'){
      result = 'You win';
    } else if (computerMove === 'paper'){
      result = 'Tie';
    } else if (computerMove === 'scissors'){
      result = 'You lose';
    }
  } else if (move === 'scissors') {
    if (computerMove === 'rock'){
      result = 'You lose';
    } else if (computerMove === 'paper'){
      result = 'You win';
    } else if (computerMove === 'scissors'){
      result = 'Tie';
    }
  }

  if (result === 'You win'){
    score.wins++;
  } else if (result === 'You lose'){
    score.losses++;
  } else if (result === 'Tie'){
    score.ties++;
  }    
  // convert score object to json then save to local storage
  localStorage.setItem('score', JSON.stringify(score));
  
  // DOM Manipulation
  const resultParagraph = document.getElementById('js-result');
  const movesParagraph = document.getElementById('js-moves');  
  resultParagraph.innerHTML = result;      
  movesParagraph.innerHTML = `You
    <img src="../img/${move.toLowerCase()}-emoji.png" alt="rock" height="50px" width="50px">
    <img src="../img/${computerMove.toLowerCase()}-emoji.png" alt="rock" height="50px" width="50px">
    Computer`;  
  diplayResult();
}

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score'); //remove from local storage
  const resultParagraph = document.getElementById('js-result');
  const movesParagraph = document.getElementById('js-moves');  
  resultParagraph.innerHTML = '';
  movesParagraph.innerHTML = '';           
  diplayResult();      
}

// always display the scores even when the page is reload
function diplayResult(){
  const scoresParagraph = document.getElementById('js-scores');
  scoresParagraph.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

let intervalId;
function autoPlay(){
  const autoPlayBtn = document.querySelector('.js-auto-play-btn');   
  if (autoPlayBtn.textContent === 'Auto Play'){
    autoPlayBtn.textContent = 'Stop Play';
    intervalId = setInterval(() => {
      const computerMe = computerMoves();
      playGame(computerMe);
    }, 1000);
  } else if (autoPlayBtn.textContent === 'Stop Play') {
    autoPlayBtn.textContent = 'Auto Play';  
    clearInterval(intervalId);
  }
}