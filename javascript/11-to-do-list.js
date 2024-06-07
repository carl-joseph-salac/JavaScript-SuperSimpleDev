// get the toDos array in local storage then convert to object then put in toDos variable
const toDos = JSON.parse(localStorage.getItem('toDos'));

if (toDos){ // only call the function if toDos variable has truthy value
  renderTodo();
}

function addToDo(){        
  const mainInput = document.querySelector('.js-main-input');
  const mainDate = document.querySelector('.js-main-date');
  const name = mainInput.value;
  const date = mainDate.value; 
  
  if (name && date){ // to avoid putting undefined value
    toDos.push({name, date}); // shorthand property
    // put toDos in local storage
    localStorage.setItem('toDos', JSON.stringify(toDos));              
  } else {
    alert('Todo and date field are required');
  }
  // console.log(toDos);          
  mainInput.value = '';
  mainDate.value = '';  
  renderTodo();
}

function renderTodo(){
  const mainDiv = document.querySelector('.js-main-div');
  let toDoHTML = '';  
  /* for (let i = 0; i < toDos.length; i++) { // using for loop
    const todoObject = toDos[i];
    const { name, date } = todoObject; // destructuring    
      toDoHTML += `
      <div>${name}</div>      
      <div>${date}</div>      
      <button onclick="deleteToDo(${i})">Delete</button>       
    `;               
  } */
  toDos.forEach(function(todoObject, i){ // using foreach loop  
    const { name, date } = todoObject; // destructuring    
      toDoHTML += `
      <div>${name}</div>      
      <div>${date}</div>      
      <button onclick="deleteToDo(${i})">Delete</button>       
    `;               
  });
  mainDiv.innerHTML = toDoHTML;        
}

function deleteToDo(index) {
  toDos.splice(index, 1);  
  localStorage.setItem('toDos', JSON.stringify(toDos));
  renderTodo();
}

function enter() {
  if (event.key === "Enter") {
    addToDo();
  }
}



// accumulator pattern
function manipulateArray(){

  const nums = [1, 2, 3, 4];

  // Initialize the accumulator  
  let total = 0;

  // Iterate through the collection
  for (i = 0; i < nums.length; i++){
    // Update the accumulator
    total += nums[i];
  }
  console.log(total);
  // Output: 10

  // multiply by 2 each item in nums
  const doubleValue = [];
  for (i = 0; i < nums.length; i++){
    const num = nums[i];
    doubleValue.push(num * 2);
  }
  console.log(doubleValue);
} 
