// Mobile-Menu

const hamburger = document.querySelector('.hammenu');
const menuContent = document.querySelector('#menuContent');

hamburger.addEventListener('click', () => {
  menuContent.classList.toggle('show');
});

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  menuContent.classList.remove('show');
});

const menuItems = document.querySelectorAll('.menuItem a');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuContent.classList.remove('show');
  });
});

// Form Validation

const form = document.getElementById('contactForm');
const emailInput = document.querySelector("input[name='email']");
const errorEmail = document.getElementById('errorEmail');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value;

  if (emailValue.toLowerCase() !== emailValue) {
    errorEmail.textContent = 'Email must be in lowercase.';
  } else {
    errorEmail.textContent = '';
    form.submit();
  }
});

// preserve data in the browser

const contactForm = document.getElementById("contactForm");

function saveFormData() {
  const formData = {
    email: contactForm.querySelector("[name='email']").value,
  };

  localStorage.setItem("contactFormData", JSON.stringify(formData));
}

//  //

function loadFormData() {
  const formData = JSON.parse(localStorage.getItem("contactFormData"));

  if (formData) {
    contactForm.querySelector("[name='email']").value = formData.email;
  }
}

loadFormData();
