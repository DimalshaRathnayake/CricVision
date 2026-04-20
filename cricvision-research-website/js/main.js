
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}
const current = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.primary-nav a').forEach(a => {
  if (a.getAttribute('href') === current) a.classList.add('active');
});
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
