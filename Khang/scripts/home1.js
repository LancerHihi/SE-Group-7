const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");

  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (button.nextElementSibling.classList.contains("show")) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}

// Display the welcome message
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')); // Retrieve the logged-in user data
if (loggedInUser && loggedInUser.fullname) {
  document.getElementById('welcome-message').textContent = `Welcome, ${loggedInUser.fullname}`;
} else {
  document.getElementById('welcome-message').textContent = 'Welcome, Guest';
}


function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'account_signin1.html'; // Redirect to login page
}

