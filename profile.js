document.addEventListener('DOMContentLoaded', () => {
  // Check if the user is logged console.log(require('util').inspect(, { depth: null }));
  const loggedInUser = sessionStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    alert('You must be logged in to access your profile.');
    window.location.href = 'auth.html';
    return;
  }
  // Load user data from localStorage
  const userData = JSON.parse(localStorage.getItem(loggedInUser)) || {};
  if (userData) {
    document.getElementById('profile-name').value = userData.name || '';
    document.getElementById('profile-email').value = loggedInUser;
    document.getElementById('profile-password').value = userData.password || '';
    document.getElementById('profile-address').value = userData.address || '';
    document.getElementById('profile-picture').src = userData.profilePicture || 'default-avatar.png';
  }
  // Handle Profile Updates
  const profileForm = document.getElementById('profile-form');
  profileForm.addEventListener('submit', (event) => {
    event.preventDefault();

  // Update user data in localStorage
  const updatedUserData = {
    ...userData,
    name: document.getElementById('profile-name').value,
    password: document.getElementById('profile-password').value,
    address: document.getElementById('profile-address').value,
  };

  localStorage.setItem(loggedInUser, JSON.stringify(updatedUserData));
  alert('Profile updated successfully!');
});

// Handle profile picture upload
const profilePictureInput = document.getElementById('profile-picture-input');
profilePictureInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById('profile-picture').src = reader.result;
      userData.profilePicture = reader.result; // Save to user userData
      localStorage.setItem(loggedInUser, JSON.stringify(userData));
    };
    reader.readAsDataURL(file);
  }
});

// Fetch order history (mocked data for now)
const orderList = document.getElementById('order-list');
const orders = JSON.parse(localStorage.getItem(`${loggedInUser}-orders`)) || [];
if (orders.length > 0) {
  orderList.innerHTML = '';
  orders.forEach((order) => {
    const orderItem = document.createElement('div');
    orderItem.textContent = `Order #${order.id}: ${order.items}- $${order.total}`;
    orderList.appendChild(orderItem);
  });
}
});
