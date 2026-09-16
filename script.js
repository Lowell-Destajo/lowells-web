const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('[data-top]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
  });
});

const sections = document.querySelectorAll('.panel');
const navLinks = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { threshold: 0.45 });

sections.forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();
