const orderInput = document.getElementById("js-order");        
const totalParagraph = document.getElementById("js-total");

function calculate() {
  let intValue = Number(orderInput.value); // convert to a number
  if (intValue >=0 && !isNaN(intValue)) {
    if (intValue < 40) {
      intValue += 10;                        
    }
    totalParagraph.innerHTML = `$${intValue.toFixed(2)}`; // fix in two decimal places
  } else {
    validate();
  }              
} 

function enter() {
  if (event.key === "Enter") {
    calculate();
  }
}

function validate() {
  let intValue = Number(orderInput.value); // convert to a number
  if (isNaN(intValue)) { // number validation          
    totalParagraph.innerHTML = "Please enter a valid number";
    return;
  }

  if (intValue < 0) {
    totalParagraph.innerHTML = "Cost cannot be less than $0";
    return;
  }
}
