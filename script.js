let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  // Clear the current list
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rs ${item.price.toFixed(0)}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = `Total: Rs ${total.toFixed(0)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Thank you for shopping with Punjab Natural!\nTotal Amount: Rs " + total.toFixed(0));
  cart = [];
  total = 0;
  updateCart();
}
