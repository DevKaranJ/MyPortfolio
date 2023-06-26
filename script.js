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
