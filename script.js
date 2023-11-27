
// scroll sections
            window.onscroll = () => {
              // sticky navbar
              let navbar = document.querySelector('navbar');
              navbar.classList.toggle('sticky', window.scrolly > 100);
            }