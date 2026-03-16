// Header transition on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 5%';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.padding = '20px 5%';
        header.style.backgroundColor = 'var(--white)';
    }
});

// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

// Select elements to reveal
document.querySelectorAll('.solution-card, .sector-item, .info-content, .info-image').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Add necessary CSS for reveal animations dynamically
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    .reveal-visible {
        opacity: 1;
        transform: translateY(0);
    }
    .solution-card:nth-child(2) { transition-delay: 0.1s; }
    .solution-card:nth-child(3) { transition-delay: 0.2s; }
    .solution-card:nth-child(4) { transition-delay: 0.3s; }
    .solution-card:nth-child(5) { transition-delay: 0.4s; }
    .solution-card:nth-child(6) { transition-delay: 0.5s; }
`;
document.head.appendChild(style);

// Smooth Scroll for local links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
