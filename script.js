 // 1. Update copyright year dynamically
document.addEventListener("DOMContentLoaded", () => {
    const footerText = document.getElementById("footer-text");
    if (footerText) {
        footerText.innerHTML = `&copy; ${new Date().getFullYear()} Darshan Choudhary. All rights reserved.`;
    }

    // 2. Load Saved Theme on Startup
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const themeIcon = document.getElementById('theme-icon');
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
});

// 3. Theme Toggle Functionality
function toggleTheme() {
    const htmlElement = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    let currentTheme = htmlElement.getAttribute('data-theme');

    if (currentTheme === 'light') {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
}