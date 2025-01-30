// Nav Fix
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// ham
const ham = document.querySelector('#ham');
const menu = document.querySelector('#menu');

ham.addEventListener('click', function () {
  ham.classList.toggle('ham-act');
  menu.classList.toggle('translate-x-[-220px]');
});

// ham out click
window.addEventListener('click', function (e) {
  if (e.target != ham && e.target != menu) {
    ham.classList.remove('ham-act');
    menu.classList.remove('translate-x-[-220px]');
  }
});

// DarkMode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const drk = document.querySelector('#drc');
const drf = document.querySelector('#drl');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    drk.classList.add('hidden');
    drf.classList.remove('hidden');
  } else {
    html.classList.remove('dark');
    drk.classList.remove('hidden');
    drf.classList.add('hidden');
  }
});

const lenis = new Lenis({
  duration: 1.2, // Kecepatan scroll (default 1)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efek easing
  smooth: true, // Aktifkan smooth scrolling
  direction: 'vertical', // Scroll vertikal
  smoothTouch: false, // Opsional: Aktifkan smooth scroll di layar sentuh
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
