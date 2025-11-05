// Theme toggle
const themeToggle = document.getElementById('theme-toggle');

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('click', toggleTheme);

// Load saved theme
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

// Scroll animations
const animateElements = document.querySelectorAll('.animate-up');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.animation = 'slideUp 0.6s forwards';
        }
    });
},{ threshold: 0.1 });

animateElements.forEach(el => observer.observe(el));

// Mobile menu toggle
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

navbar.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        navLinks.classList.toggle('active');
    }
});


document.querySelectorAll(".animate-up").forEach((el) => observer.observe(el));
