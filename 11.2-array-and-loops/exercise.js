// remove the first 2 egg in array
function removeEgg(foods) {
  let processFoods = [];
  let eggCount = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      eggCount++;
      if (eggCount <= 2) {
        continue;
      }
    }
    processFoods.push(foods[i]);
  }
  return processFoods;
}
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods)); // Output: ['apple', 'egg', 'ham']

// remove the last 2 egg in array using .reverse()
function removeLastEgg(foods2) {
  let processFoods = [];
  let eggCount = 0;
  foods2.reverse();
  for (let i = 0; i < foods2.length; i++) {
    if (foods2[i] === 'egg') {
      eggCount++;
      if (eggCount <= 2) {
        continue;
      }
    }
    processFoods.push(foods2[i]);
  }
  return processFoods.reverse();
}
const foods2 = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeLastEgg(foods2)); // Output: ['egg', 'apple', 'ham']

// use slice() to create a copy of the array
function createCopy(foods3) {
  let processFoods = [];
  let eggCount = 0;
  const foods3Copy = foods3.slice(0); // create new array 
  for (let i = 0; i < foods3Copy.length; i++) {
    if (foods3Copy[i] === 'egg') {
      eggCount++;
      if (eggCount <= 2) {
        continue;
      }
    }
    processFoods.push(foods3Copy[i]);
  }
  return processFoods.reverse();
}
const foods3 = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(createCopy(foods3)); // Output: ['egg', 'apple', 'ham']
console.log(foods3);