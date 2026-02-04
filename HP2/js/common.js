document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header__nav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-open'); 
    nav.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  });
});