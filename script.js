document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarClose = document.getElementById('sidebar-close');

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });

  // Breadcrumbs
  const breadcrumbs = document.querySelector('.breadcrumbs');
  const path = window.location.pathname.split('/').pop().replace('.html','');
  const pages = {
    index: 'Home',
    shop: 'Shop',
    about: 'About',
    contact: 'Contact',
  };

  if (path !== 'index') {
    breadcrumbs.innerHTML += ' > <span>${pages[path]}</span>';
  }
});
// Cart Functionality
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add to Cart Button Click Event
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCountElement.textConntent = cartCount;
    alert('Product added to cart!');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  // Pages data
  const pages = [
    { title: "Home", url: "index.html", description: "Welcome to Stewart-Tate & Co.- Your one-stop shop for all things trendy." },
    { title: "Shop", url: "shop.html", description: "Browse our categories and products to find what you need."},
    { title: "About", url: "about.html", description: "Learn more about Stewart-Tate & Co. and our mission."},
    { title: "Contact", url: "contact.html", description: "Get in touch with us for inquiries or support."},
  ];

  // Handle Search Form submit
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

// Filter Pages Based on query
const matches = pages.filter(page =>
  page.title.toLowerCase().includes(query) ||
  page.description.toLowerCase().includes(query));

// Display Results
displayResults(matches, query);
});

// Display Results Function
function displayResults(matches, query) {
  searchResults.innerHTML = ""; // Clear previous Results
  if (matches.length > 0) {
    const resultItems = matches.map(match => `
      <li>
      <a href="${match.url}">
      <strong>${match.title}</strong>: ${match.description}
      </a>
      </li>
      `).join("");
      searchResults.innerHTML = `
      <h3>Search Results for "${query}":</h3>
      <ul>${resultItems}</ul>
      `;
  } else {
    searchResults.innerHTML = `<p>No results found for "${query}".</p>`;
  }
  searchResults.style.display = "block";
}
});
