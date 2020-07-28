// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!'); 
  const price = product.querySelector('.price span');
  const priceNumber = parseFloat(price.innerText);
  const quantity = product.querySelector('.quantity input')
  const quantityValue = quantity.valueAsNumber
  const duckMultiply = priceNumber * quantityValue
  console.log(duckMultiply);
  const subTotal = product.querySelector('.subtotal span');
  console.log(subTotal);
  subTotal.innerHTML = duckMultiply
  return duckMultiply;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product')
  // updateSubtotal(singleProduct)
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product')
  console.log(products);
  const productsArray = [...products]
  let totalPrice = 0
  productsArray.forEach(element => {
    totalPrice += updateSubtotal(element)
  })
  console.log(totalPrice)
  const updateTotalPrice = document.querySelector('#total-value span')
  updateTotalPrice.innerHTML = totalPrice
  console.log(updateTotalPrice)
}

  // ITERATION 3


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)
})
  //... your code goes here