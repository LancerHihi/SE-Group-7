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
      password: "student123", // Secure password should be used in a real app
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

// Function to handle the signup process
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const fullname = document.getElementById('fullname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const faculty = document.getElementById('falcuty').value.trim();
  const email = document.getElementById('email').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm_password').value.trim();
  const role = "student";

  // Validation
  if (!email.endsWith('@hcmut.edu.vn')) {
    alert('Email must be a valid educational email ending with @hcmut.edu.vn');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Get existing users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check for unique email
  if (users.some(user => user.email === email)) {
    alert('This email is already registered. Cannot sign up!');
    return;
  }

  // Save new user
  users.push({ fullname, phone, faculty, email, username, password, role });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Account created successfully! Redirecting to login page...');
  window.location.href = 'account_signin1.html';
});