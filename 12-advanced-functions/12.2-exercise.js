/* 
  12j. Create an arrow function called 'multiply' that takes 2 numbers,
  multiplies them together, and returns the result.
*/
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(2, 2));

/*
  12l. Create a function countPositive(nums) that takes an array of numbers
  and returns how many numbers in the array are greater than 0.
  Create this function using .forEach() instead of a loop.
*/
const numbers = [-3, -2, -1, 0, 1, 2, 3];

// Shorthand
const countPositive = nums => {
  let positiveCount = 0;
  nums.forEach(num => num > 0 && positiveCount++);
  return positiveCount;
}
console.log(countPositive(numbers));

// Verbose (Longhand)
const countPositive1 = function (nums) {
  let positiveCount = 0;
  nums.forEach(function (num) {
    if (num > 0) {
      positiveCount++;
    } else {
      positiveCount;
    }
  });
  return positiveCount
}
console.log(countPositive1(numbers));
// Both outputs: 3

/* 
  12m. Create a function addNum(array, num) that takes an array of numbers
  and returns an array where each number is increased by 'num'.
  Create this function using .map() instead a loop.
*/
const addNum = (array, num) => {  
  const increased = array.map(value => value + num);
  return increased;
}
console.log(addNum(numbers, 1));

/* 
  12n. Create a function removeEgg(foods) that takes an array of strings
  and returns an array where the string 'egg' is removed.
  Create this function using .filter() instead of a loop.
*/
const removeEgg = (foods) =>{
  const noEgg = foods.filter(food => food !== 'egg'); // using truthy
  return noEgg;
}
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));

/* 
  12o. Update exercise 12n to only remove the first 2 eggs from the array.
  Again, use filter() instead of a loop.
*/
const removeEgg1 = (foods) =>{
  let numEgg = 0
  const noEgg = foods.filter(food => {
    if (food === 'egg') {
      if (numEgg >= 2) {        
        return true;
      } 
      numEgg++;
    } else {
      return true;
    }
  });
  return noEgg;
}
console.log(removeEgg1(foods));

/*
  12o. shorhand
  In this version, the filter function checks each food item. If the item is not an 'egg', 
  it returns true to keep it in the array. If the item is an 'egg', 
  it increments numEgg and only returns true if numEgg is already 2 or more, 
  effectively removing the first two eggs from the array. 
*/
const removeEgg2 = (foods) => {
  let numEgg = 0;
  return foods.filter(food => food !== 'egg' || numEgg++ >= 2);
}
console.log(removeEgg2(foods));

