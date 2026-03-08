// Highlight active section in sidebar
const sections = document.querySelectorAll('.section-block');
const links = document.querySelectorAll('#toc a');

const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            links.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`#toc a[href="#${e.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => obs.observe(s));