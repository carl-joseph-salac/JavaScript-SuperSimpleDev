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
  const scoresParagraph = document.getElementById('js-scores');
  resultParagraph.innerHTML = result;      
  movesParagraph.innerHTML = `You picked ${move.toUpperCase()}. - Computer picked ${computerMove.toUpperCase()}`;
  scoresParagraph.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score'); //remove from local storage      
  const scoresParagraph = document.getElementById('js-scores');
  scoresParagraph.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;      
}
