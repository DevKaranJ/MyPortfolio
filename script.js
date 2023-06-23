document.querySelector('.hammenu').addEventListener('click', function() {
    this.classList.toggle('is-active');
  });
  
  const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	document.addEventListener('DOMContentLoaded', function() {
        var hamburger = document.querySelector('.hammenu');
        var menuContent = document.querySelector('#menuContent');
      
        hamburger.addEventListener('click', function() {
          menuContent.classList.toggle('show');
        });
      });
      
    
      