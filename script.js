// Get form and input elements
const form = document.getElementById('myForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const captchaError = document.getElementById('captchaError');

// Validation functions
function validateName() {
  const name = fullNameInput.value.trim();
  if (name.length < 5) {
    nameError.textContent = 'Name must be at least 5 characters long';
    return false;
  } else {
    nameError.textContent = '';
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

function validatePhoneNumber() {
  const phone = phoneInput.value.trim();
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone) || phone === '1234567890') {
    phoneError.textContent = 'Enter a valid 10-digit phone number';
    return false;
  } else {
    phoneError.textContent = '';
    return true;
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  const name = fullNameInput.value.trim().toLowerCase();
  const isPasswordValid =
    password.length >= 8 &&
    password !== 'password' &&
    password !== name;

  if (!isPasswordValid) {
    passwordError.textContent = 'Password must be at least 8 characters long and not "password" or your name';
    return false;
  } else {
    passwordError.textContent = '';
    return true;
  }
}

function validateConfirmPassword() {
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Passwords do not match';
    return false;
  } else {
    confirmPasswordError.textContent = '';
    return true;
  }
}

function validateCaptcha() {
  const captchaCheckbox = document.getElementById('captcha');
  if (!captchaCheckbox.checked) {
    captchaError.textContent = 'Please confirm you are not a robot';
    return false;
  } else {
    captchaError.textContent = '';
    return true;
  }
}

// Form validation function
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhoneNumber();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  const isCaptchaValid = validateCaptcha();

  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid && isCaptchaValid) {
    // Form is valid, you can submit the form here
    alert('Form submitted successfully!');
    form.reset(); // Reset form after successful submission
  }
}

// Add event listeners
fullNameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhoneNumber);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);