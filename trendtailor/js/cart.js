const cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);  // Check if cart is being retrieved correctly
const cartItems = document.getElementById('cartItems');
const totalAmount = document.getElementById('totalAmount');

cartItems.innerHTML = '';
let total = 0;

cart.forEach((item, index) => {
  const priceNum = parseInt(String(item.price).replace(/[^\d]/g, ''));
  const subtotal = priceNum * item.quantity;
  total += subtotal;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td><img src="${item.image}" alt="${item.name}" style="width: 50px; vertical-align: middle;" /> ${item.name}</td>
    <td><input type="number" value="${item.quantity}" min="1" class="qty-input" data-index="${index}" /></td>
    <td>${item.price}</td>
    <td class="subtotal">₹${subtotal}</td>
    <td><button class="remove-btn" data-index="${index}">X</button></td>
  `;

  cartItems.appendChild(row);
});

totalAmount.textContent = total;

// Quantity change
cartItems.addEventListener('input', function(e) {
  if (e.target.classList.contains('qty-input')) {
    const index = e.target.dataset.index;
    const newQty = parseInt(e.target.value);
    cart[index].quantity = newQty;
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
  }
});

// Remove item
cartItems.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-btn')) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
  }
});


document.getElementById("goToCheckout").addEventListener("click", function () {
    window.location.href = "checkout.html";
  });