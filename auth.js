// Toggle between login and signup
document.getElementById('toggle-to-signup').addEventListener('click', function () {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

document.getElementById('toggle-to-login').addEventListener('click', function () {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('auth-container').style.display = 'block';
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === "user" && password === "password123") {
        // Redirect to landing page (index.html)
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Handle sign-up form submission
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        // Simulate sign-up success
        alert("Sign-up successful! Please log in.");
        document.getElementById('signup-container').style.display = 'none';
        document.getElementById('auth-container').style.display = 'block';
    } else {
        alert("All fields are required.");
    }
});
