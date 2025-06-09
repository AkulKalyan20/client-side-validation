function validateExperiment1() {
    let isValid = true;
    
    // Username validation
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long';
        usernameError.classList.add('show');
        isValid = false;
    } else {
        usernameError.classList.remove('show');
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.add('show');
        isValid = false;
    } else {
        emailError.classList.remove('show');
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        passwordError.classList.add('show');
        isValid = false;
    } else {
        passwordError.classList.remove('show');
    }

    return isValid;
}

function validateExperiment2() {
    let isValid = true;
    
    // Age validation
    const age = document.getElementById('age').value;
    const ageError = document.getElementById('ageError');
    if (age < 0 || age > 150) {
        ageError.textContent = 'Please enter a valid age (0-150)';
        ageError.classList.add('show');
        isValid = false;
    } else {
        ageError.classList.remove('show');
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Please enter a 10-digit phone number';
        phoneError.classList.add('show');
        isValid = false;
    } else {
        phoneError.classList.remove('show');
    }

    // Address validation
    const address = document.getElementById('address').value;
    const addressError = document.getElementById('addressError');
    if (address.length < 10) {
        addressError.textContent = 'Address must be at least 10 characters long';
        addressError.classList.add('show');
        isValid = false;
    } else {
        addressError.classList.remove('show');
    }

    return isValid;
}

// Add event listeners for real-time validation
if (document.getElementById('username')) {
    document.getElementById('username').addEventListener('input', function() {
        validateExperiment1();
    });
}

if (document.getElementById('email')) {
    document.getElementById('email').addEventListener('input', function() {
        validateExperiment1();
    });
}

if (document.getElementById('password')) {
    document.getElementById('password').addEventListener('input', function() {
        validateExperiment1();
    });
}

if (document.getElementById('age')) {
    document.getElementById('age').addEventListener('input', function() {
        validateExperiment2();
    });
}

if (document.getElementById('phone')) {
    document.getElementById('phone').addEventListener('input', function() {
        validateExperiment2();
    });
}

if (document.getElementById('address')) {
    document.getElementById('address').addEventListener('input', function() {
        validateExperiment2();
    });
}
