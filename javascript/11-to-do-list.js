const toDos = [];
function addToDo(){        
  const mainInput = document.querySelector('.js-main-input');
  const mainDate = document.querySelector('.js-main-date');
  const name = mainInput.value;
  const date = mainDate.value; 
  
  toDos.push({name, date}); // shorthand property
  console.log(toDos);          
  mainInput.value = '';
  mainDate.value = '';
  renderTodo();
}

function renderTodo(){
  const mainDiv = document.querySelector('.js-main-div');
  let toDoHTML = '';  
  for (let i = 0; i < toDos.length; i++) {
    const todoObject = toDos[i];
    const { name, date } = todoObject; // destructuring
    toDoHTML += `
      <div>${name}</div>      
      <div>${date}</div>      
      <button onclick="deleteToDo(${i})">Delete</button>       
    `;  
    console.log(toDoHTML);      
  }
  mainDiv.innerHTML = toDoHTML;        
}

function deleteToDo(index) {
  toDos.splice(index, 1);  
  renderTodo();
}

function enter() {
  if (event.key === "Enter") {
    addToDo();
  }
}

// accumulator pattern
function manipulateArray(){
  const nums = [1, 1, 1, 1];
  // add each item in nums     
  let total = 0;
  for (i = 0; i < nums.length; i++){
    total += nums[i];
  }
  console.log(total);
  // multiply by 2 each item in nums
  const doubleValue = [];
  for (i = 0; i < nums.length; i++){
    const num = nums[i];
    doubleValue.push(num * 2);
  }
  console.log(doubleValue);
} 
