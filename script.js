document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-links');
  const brandLogo = document.querySelector('.brand-logo');

  navMenu.addEventListener('mouseenter', () => {
    navMenu.style.transition = 'all 0.3s ease-in-out';
    navMenu.style.backgroundColor = 'darkblue';
    navMenu.style.color = 'white';
  });

  navMenu.addEventListener('mouseleave', () => {
    navMenu.style.backgroundColor = 'transparent';
    navMenu.style.color = 'inherit';
  });

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = 'white';
    });

    link.addEventListener('mouseleave', () => {
      link.style.color = 'inherit';
    });
  });

  brandLogo.addEventListener('mouseenter', () => {
    brandLogo.style.color = 'white';
  });

  brandLogo.addEventListener('mouseleave', () => {
    brandLogo.style.color = 'inherit';
  });
});
