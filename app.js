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

const colorScale1 = ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9"];