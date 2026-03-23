// Grab the elements from our HTML file
const passwordBox = document.getElementById('passwordBox');
const strengthText = document.getElementById('strengthText');

// Listen for whenever the user types something into the box
passwordBox.addEventListener('input', function() {
   
    // Get the actual text the user typed
    let password = passwordBox.value;
   
    // If the box is empty, reset the text and colors
    if (password.length === 0) {
        strengthText.textContent = 'None';
        strengthText.className = ''; // Remove any color classes
        return; // Stop running the rest of the function
    }

    // Start with a score of 0
    let score = 0;

    // 1. Check if the password is long enough (8 or more characters)
    if (password.length >= 8) {
        score += 1;
    }

    // 2. Check if it has at least one lowercase letter
    if (/[a-z]/.test(password)) {
        score += 1;
    }

    // 3. Check if it has at least one uppercase letter
    if (/[A-Z]/.test(password)) {
        score += 1;
    }

    // 4. Check if it has at least one number
    if (/[0-9]/.test(password)) {
        score += 1;
    }

    // 5. Check if it has a special character (like @, #, !, etc.)
    if (/[^a-zA-Z0-9]/.test(password)) {
        score += 1;
    }

    // Now, change the text and color based on the final score
    if (score <= 2) {
        strengthText.textContent = 'Weak';
        strengthText.className = 'weak'; // Applies the red CSS class
    } else if (score === 3 || score === 4) {
        strengthText.textContent = 'Medium';
        strengthText.className = 'medium'; // Applies the orange CSS class
    } else if (score === 5) {
        strengthText.textContent = 'Strong';
        strengthText.className = 'strong'; // Applies the green CSS class
    }
}); 
