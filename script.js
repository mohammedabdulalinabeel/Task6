// Grab elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

// Regex for email validation (covers standard formats: user@domain.com)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Individual field validators — each returns true/false and sets its own error text
function validateName() {
  const value = nameInput.value.trim();
  if (value === '') {
    showError(nameInput, nameError, 'Name is required.');
    return false;
  }
  if (value.length < 2) {
    showError(nameInput, nameError, 'Name must be at least 2 characters.');
    return false;
  }
  clearError(nameInput, nameError);
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  if (value === '') {
    showError(emailInput, emailError, 'Email is required.');
    return false;
  }
  if (!emailRegex.test(value)) {
    showError(emailInput, emailError, 'Please enter a valid email address.');
    return false;
  }
  clearError(emailInput, emailError);
  return true;
}

function validateMessage() {
  const value = messageInput.value.trim();
  if (value === '') {
    showError(messageInput, messageError, 'Message is required.');
    return false;
  }
  if (value.length < 10) {
    showError(messageInput, messageError, 'Message must be at least 10 characters.');
    return false;
  }
  clearError(messageInput, messageError);
  return true;
}

// Helpers to show/clear error state on a field
function showError(inputEl, errorEl, text) {
  inputEl.classList.add('invalid');
  errorEl.textContent = text;
}

function clearError(inputEl, errorEl) {
  inputEl.classList.remove('invalid');
  errorEl.textContent = '';
}

// Live validation as the user types (after first interaction) for instant feedback
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

// Handle form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop the actual page reload / network request

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  if (isFormValid) {
    // No actual sending — just simulate success
    successMessage.textContent = `Thanks, ${nameInput.value.trim()}! Your message has been received.`;
    successMessage.classList.add('show');
    form.reset();

    // Clear any lingering invalid styling after reset
    [nameInput, emailInput, messageInput].forEach((el) => el.classList.remove('invalid'));

    // Hide success message after a few seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 4000);
  } else {
    successMessage.classList.remove('show');
  }
});
