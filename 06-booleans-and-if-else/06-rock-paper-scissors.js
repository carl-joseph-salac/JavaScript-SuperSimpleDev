// If possible dont use global variable to avoid conflict        
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
  alert(`You picked ${move}. Computer picked ${computerMove}. ${result}`)
}    

const age = 22;
// If else statement
if (age >= 18){
  console.log('Adult');
} else {
  console.log('Minor');
}
// Ternary Operator ?:
const checkAge = age >= 18 ?  'Adult' : 'Minor';
console.log(checkAge);    

const isActive = true;
// If statement
if (isActive){
  console.log('You are online');
}
//Guard Operator &&
const isOnline = isActive && 'You are online';
console.log(isOnline);

const answer = 'I have answer';
// If else statement
if (!answer){
  console.log('N.A');
} else {
  console.log(answer);
}
// Default Operator ||
const hasAnswer = answer || 'N.A';
console.log(hasAnswer);
