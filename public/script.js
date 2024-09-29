// Animación para aparición de elementos cuando se hace scroll
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animación de inicio
    setTimeout(() => {
        document.querySelector('header').classList.add('visible');
    }, 300);
});
