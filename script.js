    document.addEventListener('DOMContentLoaded', function() {
        var hamburger = document.querySelector('.hammenu');
        var menuContent = document.querySelector('#menuContent');
      
        hamburger.addEventListener('click', function() {
          menuContent.classList.toggle('show');
        });
      });
      
      document.addEventListener("DOMContentLoaded", function() {
        const menuContent = document.getElementById("menuContent");
        const closeButton = document.querySelector(".close-button");
      
        closeButton.addEventListener("click", function() {
          menuContent.classList.remove("show");
        });
      });
      
      