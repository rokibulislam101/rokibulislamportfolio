// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar .nav-link');
window.onscroll = () => {
  let fromTop = window.scrollY + 100;

  sections.forEach(sec => {
    let secHeight = sec.offsetHeight;
    let secTop = sec.offsetTop;
    let secId = sec.getAttribute('id');
    if (fromTop >= secTop && fromTop < secTop + secHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document
        .querySelector('.navbar a[href*="' + secId + '"]')
        .classList.add('active');
    }
  });

  // sticky navbar
  let navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0px';
    navbar.style.transition = 'background-image 0.5s';
    navbar.style.backgroundImage =
      'linear-gradient(to bottom, #1e0b38, #0a0017)';
  } else {
    navbar.style.position = 'static';
    navbar.style.backgroundImage = 'none';
  }
};

// Toggole Menu Icon Change

document
  .getElementById('staticBackdrop')
  .addEventListener('click', function () {
    document.getElementById('toggle-menu').checked = false;
  });