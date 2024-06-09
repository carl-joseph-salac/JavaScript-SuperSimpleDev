function changeButton() {
  const mainButton = document.getElementById('js-main-btn');    
  if (mainButton.classList.contains('dark-mode')) {
    mainButton.innerHTML = 'Dark Mode';
    mainButton.classList.remove('dark-mode'); //add class name
    document.body.classList.remove('black');
  } else {
    mainButton.innerHTML = 'Light Mode';
    mainButton.classList.add('dark-mode'); // remove class name
    document.body.classList.add('black');
  }
  // check the element contains a class name
  const check = mainButton.classList.contains('light-mode');
  console.log(check);
}  
