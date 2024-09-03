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