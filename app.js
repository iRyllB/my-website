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