const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const desktopNav = document.querySelector('.desktop-nav');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    mobileNav.classList.remove('active');
    desktopNav.style.display = 'flex';
  } else {
    desktopNav.style.display = 'none';
  }
});
