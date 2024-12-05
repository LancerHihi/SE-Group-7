// Function to initialize default users in localStorage
(function initializeDefaultUsers() {
  const defaultUsers = [
    {
      fullname: "Admin User",
      phone: "1234567890",
      faculty: "Administration",
      email: "admin@hcmut.edu.vn",
      username: "admin",
      password: "admin123", // Secure password should be used in a real app
      role: "admin",
    },
    {
      fullname: "Student User",
      phone: "0987654321",
      faculty: "Computer Science",
      email: "student@hcmut.edu.vn",
      username: "student",
      password: "123", // Secure password should be used in a real app
      role: "student",
    },
  ];

  // Check if users data is already in localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.length === 0) {
    localStorage.setItem('users', JSON.stringify(defaultUsers));
    console.log('Default users initialized.');
  } else {
    console.log('Users already exist in localStorage.');
  }
})();

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
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    alert(`Login successful! Welcome, ${user.fullname}`);
    window.location.href = 'home1.html'; // Replace with your homepage file
  } else {
    alert('Invalid username or password!');
  }
});

