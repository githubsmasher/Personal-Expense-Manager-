// Array to store registered users
var registeredUsers = [];

// Event listener for register form submission
document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if username already exists
    if (isUsernameTaken(username)) {
      showMessage("Username is already taken.");
      return;
    }

    // Register the user
    registerUser(username, email, password);
  });

// Event listener for login form submission
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  // Check if username and password match
  if (isValidLogin(username, password)) {
    // Redirect to another HTML page after successful login
    window.location.href = "welcome.html";
  } else {
    showLoginMessage("Invalid username or password.");
  }
});

// Function to check if username already exists
function isUsernameTaken(username) {
  return registeredUsers.some((user) => user.username === username);
}

// Function to register a new user
function registerUser(username, email, password) {
  registeredUsers.push({
    username: username,
    email: email,
    password: password,
  });
  showMessage("Registration successful! Please log in.");
  // Show login form after successful registration
  document.getElementById("login-container").style.display = "block";
}

// Function to validate login credentials
function isValidLogin(username, password) {
  return registeredUsers.some(
    (user) => user.username === username && user.password === password
  );
}

// Function to display registration messages
function showMessage(message) {
  document.getElementById("register-message").textContent = message;
}

// Function to display login messages
function showLoginMessage(message) {
  document.getElementById("login-message").textContent = message;
}
