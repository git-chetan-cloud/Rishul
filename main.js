// Smooth Scroll for Navigation Links
document.querySelectorAll('.sticky-navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search Functionality for Temples Section
const searchInput = document.querySelector('.search-bar input');
const templeCards = document.querySelectorAll('.temple-card');

searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value.toLowerCase();
    templeCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Sticky Navbar Background Change on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.sticky-navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Modal Popup for Tour Details
const tourCards = document.querySelectorAll('.tour-card');
const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

tourCards.forEach(card => {
    card.addEventListener('click', function () {
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3>${title}</h3>
                <p>${description}</p>
                <button class="close-btn">Close</button>
            </div>`;
        modal.style.display = 'block';
    });
});

modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('close') || e.target.classList.contains('close-btn')) {
        modal.style.display = 'none';
    }
});

// Scroll Animations on Sections
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', function () {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY > sectionTop - sectionHeight / 3) {
            section.classList.add('visible');
        }
    });
});

// Form Submission Validation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message!');
        contactForm.reset();
    }
});

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
});

// Lazy Load Images
const images = document.querySelectorAll('img');
const lazyLoad = (target) => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                img.setAttribute('src', src);
                observer.disconnect();
            }
        });
    });
    io.observe(target);
};

images.forEach(img => {
    lazyLoad(img);
});

// Dynamic Year in Footer
const footerYear = document.querySelector('.footer-year');
footerYear.textContent = new Date().getFullYear();

// Parallax Effect for Hero Section
window.addEventListener('scroll', function () {
    const heroSection = document.querySelector('.hero-section');
    const scrollY = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrollY * 0.5}px`;
});

// Booking Button Alert for Accommodation Section
const bookingButtons = document.querySelectorAll('.accommodation-card .learn-more');
bookingButtons.forEach(button => {
    button.addEventListener('click', function () {
        alert('Booking functionality coming soon!');
    });
});

// Scroll Back to Top Button
const backToTopButton = document.createElement('div');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '&uarr;';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Dark Mode';
darkModeToggle.className = 'dark-mode-toggle';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Navbar Links Active State
const navLinks = document.querySelectorAll('.sticky-navbar a');
window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Carousel for Blog Posts
let currentSlide = 0;
const slides = document.querySelectorAll('.blog-post');
const totalSlides = slides.length;

const nextSlide = () => {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active-slide');
};

const prevSlide = () => {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active-slide');
};

document.querySelector('.next-slide').addEventListener('click', nextSlide);
document.querySelector('.prev-slide').addEventListener('click', prevSlide);

