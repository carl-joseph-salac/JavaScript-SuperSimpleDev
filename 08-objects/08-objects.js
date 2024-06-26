const simpleObject = {
  firstName: 'Alice',
  lastName: 'Smith',    
  numberKey: 123   
};
// Dot notation if the property name is simple
console.log(simpleObject.firstName); // Output: Alice
console.log(simpleObject.lastName); // Output: Smith
console.log(simpleObject.numberKey); // Output: 123 

const complexObject = {
  'first name': 'Alice', // has space
  'last-name': 'Smith', // has special character 
  '123numberKey': 123  // starts with a number
};
// Bracket notation if the property name is complex
console.log(complexObject['first name']); // Output: Alice
console.log(complexObject['last-name']); // Output: Smith
console.log(complexObject['123numberKey']); // Output: 123 

const player = {
  firstName: 'James',
  alias: 'The Beard',
  lastName: 'Harden',
  // method: function signatureMove(){
  //   console.log('Stepback and Eurostep');
  // }

  // shorthand method
  signatureMove() {
    console.log('Stepback and Eurostep');
  }
};
// const firstName =  player.firstName;
// const alias =  player.alias;
// const lastName =  player.lastName;

// use destructuring if the same variable & property name
const { firstName, alias, lastName } = player;
console.log(firstName, alias, lastName);      
player.signatureMove();
