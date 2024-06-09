
// heads() and tails() have the same logic    
function heads(){ // shorter code
  const random = Math.random();
  let result = random < 0.5 ? 'HEADS' : 'TAILS';                  
  let status = result === 'HEADS' ? 'YOU WIN!' : 'YOU LOSE!';      
  console.log(`The result of coinflip is ${result}. ${status}`);
}

function tails(){ // longer code
  const random = Math.random();      
  let result = '';
  if (random < 0.5){
    result = 'HEADS';
  } else {
    result = 'TAILS';
  }
  let status = '';
  if (result  === 'TAILS') {
    status = 'YOU WIN';
  } else {
    status = 'YOU LOSE';
  }
  console.log(`The result of coinflip is ${result}. ${status}`);
}    
