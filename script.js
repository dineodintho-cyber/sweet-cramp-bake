// -------------------------------
// Accordion Functionality
// -------------------------------
const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle("active");
    const panel = button.nextElementSibling;

    panel.style.display =
      panel.style.display === "block" ? "none" : "block";
  });
});


// -------------------------------
// Lightbox Functionality
// -------------------------------
function openLightbox(src) {
  const lightbox = document.getElementById("lightboxModal");
  const lightboxImage = document.getElementById("lightboxImage");

  lightbox.style.display = "flex"; // better for centering
  lightboxImage.src = src;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightboxModal");
  lightbox.style.display = "none";
}


// -------------------------------
// Hamburger Menu Toggle
// -------------------------------
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close on click (mobile)
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}
<script>
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button =
 {
  button.addEventListener("click", () => {
    button.classList.toggle("active"); // highlight clicked question
    const panel = button.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // collapse answer
      panel.style.padding = "0 15px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // expand answer
      panel.style.padding = "15px";
    }
  })
});
</script>
// Function to handle form submission and validation
document.querySelector('.enquiry-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission to validate first

  // Clear previous error messages
  clearErrors();

  let isValid = true;
  
  // Form field variables
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const product = document.getElementById('product').value;
  const message = document.getElementById('message').value;

  // Name Validation
  if (name.trim() === '') {
    showError('name', 'Name is required');
    isValid = false;
  }

  // Email Validation (basic format check)
  if (email.trim() === '') {
    showError('email', 'Email is required');
    isValid = false;
  } else if (!validateEmail(email)) {
    showError('email', 'Please enter a valid email address');
    isValid = false;
  }

  // Phone Number Validation
  if (phone.trim() === '') {
    showError('phone', 'Phone number is required');
    isValid = false;
  }

  // Product Validation
  if (product === '') {
    showError('product', 'Please select a product');
    isValid = false;
  }

  // Message Validation
  if (message.trim() === '') {
    showError('message', 'Message cannot be empty');
    isValid = false;
  }

  // If form is valid, show success message and reset form
  if (isValid) {
    document.getElementById('form-feedback').textContent = 'Thank you for your enquiry! We’ll respond shortly.';
    document.getElementById('form-feedback').style.color = 'green';
    document.getElementById('form-feedback').style.display = 'block';
    document.querySelector('.enquiry-form').reset(); // Reset the form
  }
});

// Function to show error message
function showError(field, message) {
  const errorElement = document.getElementById(`${field}-error`);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

// Function to clear all error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => {
    error.style.display = 'none';
  });
}

// Email Validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
