// modify last index of an array
function modifyEnd(){
  // simple and straightforward
  const nums1 = [10, 20, 30];
  nums1[2] = 99;
  console.log(nums1); // Output: [10, 20, 99]

  // using splice method
  const nums2 = [10, 20, 30];
  nums2.splice(2, 1, 99); // At index 2, remove 1 element, and add 99
  console.log(nums2); // Output: [10, 20, 99]

  // using map method
  const nums3 = [10, 20, 30];
  const newNums3 = nums3.map((num, index) => index === 2 ? 99 : num);
  console.log(newNums3);  // Output: [10, 20, 99]

  // using Array.from
  const nums4 = [10, 20, 30];
  const newNums4 = Array.from(nums4);
  newNums4[2] = 99;
  console.log(newNums4);  // Output: [10, 20, 99]
}
modifyEnd();

const names = ['Carl', 'Carlo', 'Carlson', 'Carlito']
// get the last value of an array    
function getLastValue(names){
  const lastValue = names.length - 1;
  console.log(names[lastValue]);
}
getLastValue(names);

// swap the first and last value of an array
function arraySwap(names){
const firstIndex = names.shift();   
const lastIndex = names.pop();
names.unshift(lastIndex)
names.push(firstIndex);
console.log(names);
}
arraySwap(names);

// get numbers that is greater than 0
function countPositive(nums){
const greaterZero = []
for (let i = 0; i < nums.length; i++){
  if (nums[i] > 0){
    greaterZero.push(nums[i]);
  }
}
return greaterZero;
}
console.log(countPositive([-1, 0, 1, 2, 3, 4]));   
