// FizzBuzz
function fizzBuzz(){
  for (let num = 1; num <= 20; num++){
    if (num % 3 === 0 && !(num % 5 === 0)){
      console.log('Fizz');
    } else if (num % 5 === 0 && !(num % 3 === 0)) {
      console.log('Buzz');
    } else if (num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz');
    } else {
      console.log(num);
    }
  }
}
// fizzBuzz();

// simplified by ChatGPT
function fizzBuzzSimplified(){
  for (let num = 1; num <= 20; num++) {
    // check the condition for FizzBuzz first
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz');
    } else if (num % 3 === 0) {
      console.log('Fizz');
    } else if (num % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(num);
    }
  }  
}
// fizzBuzzSimplified();

// return the index number if array[i] === word
function findIndex(array, word){
  for (let i = 0; i < array.length; i++) {
    if (array[i] ===  word) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));

// use findIndex() function to get the unique colors
function unique(array){
  let uniqueColors = []; 
  for (let i = 0; i < array.length; i++) {
    let result = findIndex(uniqueColors, array[i]);
    if (result === -1){
      uniqueColors.push(array[i]);
    }
  }
  return uniqueColors;
}
console.log(unique(['green', 'red', 'blue', 'red', 'orange']));

