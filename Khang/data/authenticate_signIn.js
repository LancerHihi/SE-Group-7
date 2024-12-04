// Function to handle the login process
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Get existing users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Authenticate user
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert('Login successful! Redirecting to the homepage...');
    window.location.href = 'home.html'; // Replace with your homepage file
  } else {
    alert('Invalid username or password!');
  }
});
