document.addEventListener('DOMContentLoaded',() => {
  //Sample cart items (replace with actual cart data from your system)
  const cartItems = [
    { name: 'Item 1', price: 20 },
    { name: 'Item 2', price: 20 },
  ];

  // Populate cart cart items
  const cartItemsContainer = document.getElementById('cart-items');
  let totalPrice = 0;
  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(itemElement);
    totalPrice += item.price;
  });

  // Show total Price
  document.getElementById('total-price').textContent = `$${totalPrice}`;

// Toggle shipping address visibility
const sameAsBillingCheckbox = document.getElementById('same-as-billing');
const shippingDetails = document.getElementById('shipping-details');
sameAsBillingCheckbox.addEventListener('change', () => {
  if (sameAsBillingCheckbox.checked) {
    shippingDetails.style.display = 'none';
  } else {
    shippingDetails.style.display = 'block';
  }
});

// Handle form submission
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Order placed successfully!');
  // Add Actual checkout logic here

const orders = JSON.parse(localStorage.getItem(`${loggedInUser}-orders`)) || [];
const newOrder = { id: 1, items: 'Product A, Product B', total: 20.00 };
orders.push(newOrder);
localStorage.setItem(`${loggedInUser}-orders`, JSON.stringify(orders));
});
});
