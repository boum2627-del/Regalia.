// Init Icons
lucide.createIcons();

// Intro Animation
window.addEventListener('load', () => {
    const logo = document.getElementById('intro-logo');
    const line = document.getElementById('intro-line');
    const sub = document.getElementById('intro-sub');
    const screen = document.getElementById('intro-screen');

    // Intro Sequence
    if(logo) setTimeout(() => { logo.style.opacity = 1; logo.style.transform = 'scale(1)'; }, 300);
    if(line) setTimeout(() => { line.style.width = '60%'; }, 1500);
    if(sub) setTimeout(() => { sub.style.opacity = 1; }, 2500);

    // Exit Intro
    setTimeout(() => {
        if(screen) screen.classList.add('intro-hidden');
    }, 4000);
});

// Navbar Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if(nav) {
        if(window.scrollY > 50) {
            nav.classList.add('bg-black/90', 'backdrop-blur-md', 'py-4');
            nav.classList.remove('bg-transparent', 'py-6');
        } else {
            nav.classList.remove('bg-black/90', 'backdrop-blur-md', 'py-4');
            nav.classList.add('bg-transparent', 'py-6');
        }
    }
});

// Hero Slider
const slidesData = [
    { title: 'Shadow of the Bull', sub: 'Lamborghini Aventador Ultimae "Ombra"' },
    { title: 'Italian Venom', sub: 'Ferrari SF90 "Cavallo Nero"' },
    { title: 'Bavarian Ghost', sub: 'BMW M4 CSL "Phantom"' }
];

const sliderEl = document.getElementById('hero-slider');
if(sliderEl) {
    let currentSlide = 0;
    const slides = sliderEl.children;
    const titleEl = document.getElementById('hero-title');
    const subEl = document.getElementById('hero-subtitle');
    const dotsContainer = document.getElementById('slider-dots');
    
    // Safety check for dots
    let dots = [];
    if(dotsContainer) {
        dots = dotsContainer.children;
    }

    setInterval(() => {
        // Hide current
        if(slides[currentSlide]) slides[currentSlide].style.opacity = 0;
        
        if(dots[currentSlide]) {
            dots[currentSlide].classList.remove('bg-gold');
            dots[currentSlide].classList.add('bg-gray-700');
        }
        
        // Update Index
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Show new
        if(slides[currentSlide]) slides[currentSlide].style.opacity = 1;
        
        if(dots[currentSlide]) {
            dots[currentSlide].classList.remove('bg-gray-700');
            dots[currentSlide].classList.add('bg-gold');
        }

        // Update Text (Fade out/in)
        if(titleEl && subEl) {
            titleEl.style.opacity = 0;
            subEl.style.opacity = 0;
            setTimeout(() => {
                if(slidesData[currentSlide]) {
                    titleEl.textContent = slidesData[currentSlide].title;
                    subEl.textContent = slidesData[currentSlide].sub;
                    titleEl.style.opacity = 1;
                    subEl.style.opacity = 1;
                }
            }, 500);
        }

    }, 5000);
}

// Scroll Animations (Fade In)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
