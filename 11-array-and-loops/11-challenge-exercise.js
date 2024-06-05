// get the minimum and maximum numbers
function minMax1(numbers){ // using Infinity
  if (numbers.length === 0){
    return {min: null, max: null};
  }
  let minNum = Infinity;
  let maxNum = -Infinity;
  for (let i = 0; i < numbers.length; i++){    
    if (numbers[i] < minNum){ 
      minNum = numbers[i];
    }
    if (numbers[i] > maxNum){
      maxNum = numbers[i];
    }
  }
  return {min: minNum, max: maxNum};
}
console.log(minMax1([3]));

function minMax2(numbers){ // without using Infinity
  if (numbers.length === 0){
    return {min: undefined, max: undefined};
  }
  let minNum = numbers[0];
  let maxNum = numbers[0];
  for (let i = 1; i < numbers.length; i++){
    if (numbers[i] < minNum){
      minNum = numbers[i];
    }
    if (numbers[i] > maxNum){
      maxNum = numbers[i];
    }
  }
  return {min: minNum, max: maxNum};
}
console.log(minMax2([3]));

// count the number of the same word in an array
function countWords(words){
  const wordCounts = {};
  for (let i = 0; i < words.length; i++){
    let word = words[i];
    // assign value to 0 if the property name doesnt already exist
    if (!wordCounts[word]){       
      wordCounts[word] = 0;     
    }
    // increment the value if property name already exist
    wordCounts[word] += 1;
  }
 return wordCounts;
}
console.log(countWords([
  'apple', 
  'grapes', 
  'apple', 
  'grapes', 
  'apple', 
  'mango'
]));
