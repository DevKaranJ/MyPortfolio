const form = document.getElementById("contactForm");
const emailInput = document.querySelector("input[name='email']");
const errorEmail = document.getElementById("errorEmail");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const emailValue = emailInput.value;

  if (emailValue.toLowerCase() !== emailValue) {
    // Email is not in lowercase, show error message
    errorEmail.textContent = "Email must be in lowercase.";
  } else {
    // Email is in lowercase, clear error message and submit the form
    errorEmail.textContent = ""; // Clear error message
    form.submit();
  }
});
