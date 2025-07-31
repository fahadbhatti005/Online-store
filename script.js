let cartCount = 0;
let totalPrice = 0;

function addToCart(price) {
  cartCount++;
  totalPrice += price;

  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("cart-total").textContent = "$" + totalPrice.toFixed(2);
}
