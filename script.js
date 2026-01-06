// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Temporary login handler
document.querySelector('.login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Customer login will be enabled in a future update.");
});
