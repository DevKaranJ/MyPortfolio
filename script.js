document.querySelector('.hammenu').addEventListener('click', function() {
    this.classList.toggle('is-active');
  });
  
  const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	function toggleMenu() {
        var menuContent = document.getElementById("menuContent");
        menuContent.classList.toggle("show");
      }
      