let cart = JSON.parse(localStorage.getItem("cart")) || [];
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
function addToCart(product, price) {
  cart.push({ product, price });
  saveCart();
}
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");
  cartItems.innerHTML = "";
  let totalPrice = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - PKR ${item.price}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      saveCart();
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    totalPrice += item.price;
  });
  total.textContent = totalPrice;
}
function clearCart() {
  cart = [];
  saveCart();
}
document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();
  cart = [];
  saveCart();
  document.getElementById("confirmation").classList.remove("hidden");
  this.reset();
});
window.onload = renderCart;