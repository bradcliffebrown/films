const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.setAttribute('aria-hidden', 'false');
        } else {
            entry.target.classList.remove('show');
            entry.target.setAttribute('aria-hidden', 'true');
        }
    });
}, {
    threshold: 0.1
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => {
    el.setAttribute('aria-hidden', 'true');
    observer.observe(el);
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const h1 = header.querySelector('h1');

    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.style.backgroundColor = 'rgba(44, 62, 80, 0)'; // Make background transparent
        h1.style.fontSize = '1.7em'; // Reduce font size by 15%
    } else {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.8)'; // Restore background
        h1.style.fontSize = '2em'; // Restore original font size
    }
});
