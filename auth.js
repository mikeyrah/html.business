document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  const toggleToLogin = document.getElementById('toggle-to-login');
  const toggleToRegister = document.getElementById('toggle-to-register');

// Toggle between Forms
toggleToLogin.addEventListener('click', (event) => {
  event.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
  toggleToLogin.style.display = 'none';
  toggleToRegister.style.display = 'block';
});

toggleToRegister.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
toggleToRegister.style.display ='none';
toggleToLogin.style.display = 'block';
});

// Handle Registration
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  if (localStorage.getItem(email)) {
    alert('Account already exists with this email!');
    return;
  }

  localStorage.setItem(email, JSON.stringify({ password }));
  alert('Registration successful! You can now log in.');
  registerForm.reset();
  window.location.href = 'auth.html'; // Redirect to login form
});

// Handle login
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const userData = JSON.parse(localStorage.getItem(email));
  if (userData && userData.password === password) {
    alert('Login successful!');
    sessionStorage.setItem('loggedInUser', email);
    window.location.href = 'index.html'; // Redirect to home page
  } else {
    alert('Invalid email or password!');
  }
});

// Check if user is logged console.
const loggedInUser = sessionStorage.getItem('loggedInUser');
if (loggedInUser) {
  alert('Welcome back, ${loggedInUser}!');
}
});
