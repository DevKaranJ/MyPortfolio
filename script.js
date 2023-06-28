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
const emailInput = document.querySelector(`input[name='email']`);
const errorEmail = document.getElementById('errorEmail');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value;

  if (emailValue !== emailValue.toLowerCase()) {
    errorEmail.textContent = 'Email must be in lowercase.';
  } else {
    errorEmail.textContent = '';
    form.submit();
  }
});

// Preserve data in the browser

const contactForm = document.getElementById('contactForm');

function saveFormData() {
  const formData = {
    name: contactForm.querySelector("[name='name']").value,
    email: contactForm.querySelector(`input[name='email']`).value,
    message: contactForm.querySelector("[name='message']").value,
  };

  localStorage.setItem('contactFormData', JSON.stringify(formData));
}

function loadFormData() {
  const formData = JSON.parse(localStorage.getItem('contactFormData'));

  if (formData) {
    contactForm.querySelector("[name='name']").value = formData.name;
    contactForm.querySelector(`input[name='email']`).value = formData.email;
    contactForm.querySelector("[name='message']").value = formData.message;
  }
}

loadFormData();
