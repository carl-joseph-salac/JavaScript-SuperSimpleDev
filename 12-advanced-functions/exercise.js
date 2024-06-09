// 12a
const add = function (){
  console.log(2 + 3);
}
add();
add();

// 12b
function runTwice(fun){
  fun();
  fun();
}
runTwice(function (){
  console.log('12.b');
});
runTwice(add);

// 12c. Change the button text after 1sec. when clicked
function changeButton(){
  const startBtn = document.querySelector('.js-start-btn');
  startBtn.textContent = 'Loading...';
  setTimeout(function (){
    startBtn.textContent = 'Finished';
  }, 1000);
}

// 12e
let timeoutId;
function addToCart(){    
  const addedNotif = document.querySelector('.js-notif');
  addedNotif.textContent = 'Added';
  // clear the previous timeoutId to refresh the time out to 2s.
  clearTimeout(timeoutId); 
  timeoutId = setTimeout(function (){
    addedNotif.innerHTML = '';
  }, 2000);
}

// 12g. 
let messages = 0;
let intervalId;
setInterval(function (){
  if (messages <= 0){
    document.title = 'Advanced Functions Exercise';   
  } else {
    if (document.title === 'Advanced Functions Exercise'){
      document.title = `(${messages}) New messages`;  
    } else {
      document.title = 'Advanced Functions Exercise'; 
    }  
  }    
}, 1000);

function addMessage(){
  messages++;
}

function removeMessage(){
  messages--;
}
