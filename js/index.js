// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const rubberDuck = document.querySelector('.product1'); // why when we use getElementsByClassName doesn't work
  const beachTowel = document.querySelector('.product2');
  updateSubtotal(rubberDuck);
  updateSubtotal(beachTowel);
  // ITERATION 3
  //... your code goes here
  const rubberDuckPrice = updateSubtotal(rubberDuck);
  const beachTowelPrice = updateSubtotal(beachTowel);
  const totalFinalPrice = document.getElementById('total-value');
  const totalPrice = rubberDuckPrice + beachTowelPrice;
  totalFinalPrice.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
