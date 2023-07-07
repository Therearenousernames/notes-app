document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting 

    // Get the values from the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').textContent = 'Login successful!';
        // Redirect to another page or perform other actions on successful login.
        setTimeout(function() {
            window.location.href = "index.html"; 
          }, 2000); 
    } else {
        document.getElementById('message').textContent = "Invalid username or password";
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});