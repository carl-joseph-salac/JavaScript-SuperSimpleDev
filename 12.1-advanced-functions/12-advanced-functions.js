regularFun(); // Output: Im regular function    
function regularFun(){ 
  console.log('Im regular function');
}    
        
const funExp = function(){ 
  console.log('Im function expressions');
}
funExp(); // Output: Im regular function     

// using function expression
setTimeout(function() { // callback function
  console.log('This message is shown after 1 second');
}, 1000);

// using regular function
function showMessage() { // function declaration
  console.log('This message is shown after 1 second');
}
setTimeout(showMessage, 1000);

setTimeout(function() { // traditional function
  console.log('This message is shown after 2 second');
}, 2000);

setTimeout(() => { // arrow function
  console.log('This message is shown after 2 second');
}, 2000);

// Both outputs: This message is shown after 2 second

function run(param){
  param();
}
run(function(){ // callback function
  console.log('hello3');
});

const obj = {
  message: 'Hello from traditional function',
  showMessage: function() {
      // Save the context of `this`
      const self = this; 
      setTimeout(function() {
          // Use `self` instead of `this`
          console.log(self.message); 
      }, 1000);
  }
};
obj.showMessage(); 
// Output: 'Hello from traditional function'

const obj1 = {
  message: 'Hello from arrow function',
  showMessage: function() {
      setTimeout(() => {
          // `this` refers to `obj1`
          console.log(this.message); 
      }, 1000);
  }
};
obj1.showMessage(); 
// Output: 'Hello from arrow function'

// arrow function
const hello4 = () => {
  console.log('hello4');
}
hello4();

// arrow function shorthand
const hello5 = () => console.log('hello5');  
hello5();

//arrow function 1 param
const hello6 = param => console.log(param);
hello6('hello6');

// runs the function after 3s.
setTimeout(function(){
  console.log('timeout');
}, 3000);

// runs the function every 3s.
setInterval(function(){
  console.log('interval');
}, 3000);

// forEach
const names = ['Carl', 'Carlo', 'Carlson'];
names.forEach((value, index) => {
  // skips the specific index      
  if (value === 'Carlo'){ 
    return; // same as continue in for loop
  } // if you want to use break just use regular for loop
  console.log(index, value);
});   

// filter
const numbers = [1, -3, 5, -1, 8];
const positiveNumbers = numbers.filter((number, index) => { // not shorthand
  if (number >= 0){ // using if else
    return true;
  } else {
    return false;
  }
  //return number >= 0; // shorthand using truthy value
});
console.log(positiveNumbers);

// map
const progLangs = ['JavaScript', 'Php', 'Sql', 'Python', 'Java'];
const lowerCase = progLangs.map(progLang =>  progLang.toLocaleLowerCase()); // shorthand
console.log(lowerCase);

// addEventListener
const eventButton = document.querySelector('.js-event');
eventButton.addEventListener('click', () => {
  console.log('Event Listener');
});