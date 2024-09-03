// TOGGLE DARKMODE
function toggleDarkTheme() {
  const icon = document.getElementById('darkmode');
  const isDark = document.body.classList.toggle('dark-theme');
  icon.src = isDark ? 'images/sun.png' : 'images/moon.png';
}

document.querySelectorAll('#darkmode, #dlmode').forEach(btn => {
  btn.addEventListener('click', toggleDarkTheme);
});
 
// Handle scroll and update navbar appearance
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const logo = document.querySelector('.logo');
  const navItems = document.querySelectorAll('nav ul li');

  const action = window.scrollY > 0 ? 'add' : 'remove';
  nav.classList[action]('scrolled');
  logo.classList[action]('scrolled');
  navItems.forEach(item => item.classList[action]('scrolled'));
});

// ACTIVE LINK HIGHLIGHT
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

const observerOptions = { threshold: 0.5 };

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const navLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLink.classList.add('active');
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// CLICK EVENT
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// GIGGLE ANIMATION
const h1 = document.querySelector('.header-text h1');
let slideInComplete = false;
setTimeout(() => slideInComplete = true, 1500);

h1.addEventListener('mouseenter', event => {
  if (event.target === h1 && slideInComplete) {
    h1.classList.add('giggle');
  }
});
h1.addEventListener('animationend', event => {
  if (event.animationName === 'giggle') {
    h1.classList.remove('giggle');
    void h1.offsetWidth;
  }
});

// ABOUT ME TABS
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  [...tabLinks].forEach(tab => tab.classList.remove('active-link'));
  [...tabContents].forEach(content => content.classList.remove('active-tab'));
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

// MENU
const sidemenu = document.getElementById('sidemenu');

function openmenu() {
  sidemenu.style.right = '0';
}

function closemenu() {
  sidemenu.style.right = '-200px';
}
