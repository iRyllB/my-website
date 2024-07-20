// Function to handle scroll and update the navbar appearance
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo');
    const navItems = document.querySelectorAll('nav ul li');
  
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
      logo.classList.add('scrolled');
      navItems.forEach(item => item.classList.add('scrolled'));
    } else {
      nav.classList.remove('scrolled');
      logo.classList.remove('scrolled');
      navItems.forEach(item => item.classList.remove('scrolled'));
    }
  });
  
  // ACTIVE LINK HIGHLIGHT
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`nav ul li a[href="#${id}"]`);
  
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  //CLICK EVENT 
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
  

//GIGGLE ANIMATION
const h1 = document.querySelector('.header-text h1');
let slideInComplete = false;
setTimeout(() => {
    slideInComplete = true;
}, 1500); 
h1.addEventListener('mouseenter', function(event) {
    if (event.target === h1 && slideInComplete) {
        h1.classList.add('giggle');
    }
});
h1.addEventListener('animationend', function(event) {
    if (event.animationName === 'giggle') {
        h1.classList.remove('giggle');
        void h1.offsetWidth; 
    }
});


//ABOUT ME
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

//MENU
var sidemenu =document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = '0';
}
function closemenu(){
    sidemenu.style.right = '-200px';
}



//DOWNLOAD CV - (CURRENTLY HAS NO EFFECT/FUNCTION. RESERVED FOR MORE COMPLEX DOWNLOADS)
//document.getElementById('download').addEventListener('click', function(event) {
 //   event.preventDefault();

   // var link = document.createElement('a');
    //link.href = 'downloadable/cvsample.pdf';
  //  link.download = 'Curriculum Vitae Example.pdf';

  //  document.body.appendChild(link);

   // link.click();

   // document.body.removeChild(link);
//});
