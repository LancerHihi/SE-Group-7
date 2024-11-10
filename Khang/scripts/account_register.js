document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Get all input elements
      const fullName = document.getElementById("username").value;
      const phoneNumber = document.getElementById("phone").value;
      const faculty = document.getElementById("faculty").value;
      const email = document.getElementById("email").value;
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Basic validation
      if (!fullName || !phoneNumber || !faculty || !email || !username || !password) {
        alert("Please fill in all fields.");
        return;
      }
  
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      const phonePattern = /^\(\+84\)\s\d{9}$/;
      if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number (e.g., (+84) 912345678).");
        return;
      }
  
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }
  
      // Collect user data into an object
      const userData = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        faculty: faculty,
        email: email,
        username: username,
        password: password
      };
  
      // Log user data for testing purposes
      console.log("User Data:", userData);
  
      // Redirect to sign-in page after registration
      alert("Registration successful! Redirecting to sign-in page...");
      window.location.href = "account_signin.html";
    });
  });
  