let cartQuantity = 0;
function showQuantity(){      
  console.log(`Cart Quantity: ${cartQuantity}`); // template literals and interpolation
}
function addToCart(){
  cartQuantity ++;
  if (cartQuantity > 10){
    alert('The maximum capacity of the cart is only 10 quantities');
    cartQuantity --;        
  } else {
    console.log(`Cart Quantity: ${cartQuantity}`);
  }       
}    
function plus2(){
  cartQuantity += 2;
  if (cartQuantity > 10){
    alert('The maximum capacity of the cart is only 10 quantities');
    cartQuantity -= 2;        
  } else {
    console.log(`Cart Quantity: ${cartQuantity}`);
  }      
}
function plus3(){
  cartQuantity += 3;
  if (cartQuantity > 10){
    alert('The maximum capacity of the cart is only 10 quantities');
    cartQuantity -= 3;        
  } else {
    console.log(`Cart Quantity: ${cartQuantity}`);
  }      
}
function resetCart(){
  cartQuantity = 0;
  console.log(`Cart Quantity: ${cartQuantity}`);
}
