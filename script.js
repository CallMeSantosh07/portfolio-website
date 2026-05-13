// MENU ICON TOGGLE AND NAVBAR SHOW/HIDE
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// SECTION ACTIVE LINK HIGHLIGHT ON SCROLL
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if(activeLink) activeLink.classList.add('active');
        }
    });

    // Make header sticky
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove mobile nav and icon when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// SCROLLREVEAL ANIMATIONS (corrected "origin" spelling)
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true // Animation repeats when scrolling up/down
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.Santosh-img, .about-img, .services-container, .portfolio-container, .research-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// TYPED JS MULTI-TEXT ANIMATION
var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Blogger", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// CONTACT FORM SUCCESS FEEDBACK (in addition to HTML)
const form = document.getElementById('contact-form');
const successDiv = document.getElementById('form-success');
if(form && successDiv) {
    form.addEventListener('submit', function(e){
        setTimeout(() => {
            successDiv.style.display = "block";
            setTimeout(() => { successDiv.style.display = "none"; }, 5000);
        }, 600);
    });
}