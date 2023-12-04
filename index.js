document.addEventListener('DOMContentLoaded', function () {
    let prevScrollPos = document.documentElement.scrollTop || 0;
    const menu = document.getElementById('menu');
    const background = document.getElementById('background');

    window.onscroll = function () {
      const currentScrollPos = document.documentElement.scrollTop || 0;

      if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the menu
        menu.classList.remove('hide');
        background.classList.remove('hide');
      } else {
        // Scrolling down, hide the menu
        menu.classList.add('hide');
        background.classList.add('hide');
      }

      prevScrollPos = currentScrollPos;
    };
  });